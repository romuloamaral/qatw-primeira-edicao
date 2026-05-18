import { test } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { DashPage } from '../pages/DashPage.js';
import { cleanJobs, getJob } from '../support/redis.js';
import { sensitiveHeaders } from 'node:http2';
// import { obterCodigo2FA } from '../support/db.js';     // Se quiser recuperar o código 2FA via base de dados utilize este import

const { Given, When, Then } = createBdd(test);


/* ======================================================
   GIVEN - Contexto inicial
====================================================== */


Given('que o usuário acessa a página de login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.acessarPagina();
});


/* ======================================================
   WHEN - Ações
====================================================== */


When('informa CPF e senha válidos', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.preencherCpf(process.env.TEST_USER);
  await loginPage.preencherSenha(process.env.TEST_USER_PASSWORD);
});

When('informa o código 2FA válido', async ({ page }) => {
  const loginPage = new LoginPage(page);
  // Limpa a fila do Redis antes do login,
  // garantindo que apenas o código 2FA atual será utilizado.
  await cleanJobs();
  await loginPage.aguardarTela2FA();

  // Recupera o código 2FA gerado e armazenado no Redis.
  const codigo = await getJob();

  // Alternativa usando banco de dados:
  // const codigo = await obterCodigo2FA(process.env.TEST_USER);

  await loginPage.preencher2FA(codigo);
});

When('informa o código 2FA {string}', async ({ page }, codigo) => {
  const loginPage = new LoginPage(page);

  await loginPage.aguardarTela2FA();
  await loginPage.preencher2FA(codigo);
});

When('informa CPF {string}', async ({ page }, cpf) => {
  const loginPage = new LoginPage(page);

  await loginPage.preencherCpf(cpf);
});

When('informa CPF válido', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.preencherCpf(process.env.TEST_USER);
});

When('iforma senha {string}', async ({ page }, senha) => {
  const loginPage = new LoginPage(page);

  await loginPage.preencherSenha(senha);
});

/* ======================================================
   THEN - Validações
====================================================== */


Then('deve visualizar o saldo {string}', async ({ page }, saldoEsperado) => {
  const dashPage = new DashPage(page);

  await expect(dashPage.saldo).toHaveText(saldoEsperado);
});

Then('deve visualizar a mensagem {string}', async ({ page }, mensagemEsperada) => {
  const loginPage = new LoginPage(page);

  const mensagemAtual = await loginPage.obterTextoMensagemErro();

  expect(mensagemAtual).toBe(mensagemEsperada);
});