import { test } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { DashPage } from '../pages/DashPage.js';
import { cleanJobs, getJob } from '../support/redis.js';
import { sensitiveHeaders } from 'node:http2';

const { Given, When, Then } = createBdd(test);

Given('que o usuário realiza login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.acessarPagina();
  await loginPage.realizarLogin(process.env.TEST_USER, process.env.TEST_USER_PASSWORD);
});

When('acessar a lista de ultimas transações', async ({ page }) => {
  const dashPage = new DashPage(page);
  
  await dashPage.aguardarListaUltimasTransacoes();
});

Then('deve visualizar o pagamento do Salário', async ({ page }) => {
    const dashPage = new DashPage(page);
  
    await expect(dashPage.txtPagamentoSalario).toBeVisible();
});