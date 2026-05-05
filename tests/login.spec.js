import { test, expect } from '@playwright/test';
import { obterCodigo2FA } from '../support/db';
import { LoginPage } from '../pages/LoginPage';
import { DashPage } from '../pages/DashPage';
import { cleanJobs, getJob } from '../support/redis';


test('Validar realização de login com dados válidos.', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashPage  = new DashPage(page);
  await cleanJobs(); // Limpara todos os jobs da fila do Redis.
  await loginPage.acessaPagina();
  await loginPage.informaCpf(process.env.TEST_USER);
  await loginPage.informaSenha(process.env.TEST_USER_PASSWORD);
  await loginPage.waitForTwoFactorSection();
  const code = await getJob();                          // recupera código 2FA direto da fila do Redis.
  // const code = await obterCodigo2FA(user.cpf);       // recupera código 2FA vis base de dados.
  loginPage.informa2FA(code);
  await expect(await dashPage.obterSaldo()).toHaveText('R$ 5.000,00');
});




test('Validar que login não é realizado quando código de autenticação é inválido.', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.acessaPagina();
  await loginPage.informaCpf(process.env.TEST_USER);
  await loginPage.informaSenha(process.env.TEST_USER_PASSWORD);
  await loginPage.informa2FA('123456');
  await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.');
});

// test('Validar realização de login com dados válidos.', async ({ page }) => {

//   const loginPage = new LoginPage(page);
  
//   const user = {
//     cpf: '00000014141',
//     password: '147258'
//   }

//   await page.goto('http://paybank-mf-auth:3000/');

//   await page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(user.cpf);
//   await page.getByRole('button', { name: 'Continuar' }).click();

//   for (const digito of user.password){
//     await page.getByRole('button', { name: digito }).click();
//   }

//   await page.getByRole('button', { name: 'Continuar' }).click();

//   await page.waitForTimeout(3000);
//   const code = await obterCodigo2FA();
 
//   await page.getByRole('textbox', { name: '000000' }).fill(code);
//   await page.getByRole('button', { name: 'Verificar' }).click();

//   await page.waitForTimeout(2000);

//   await expect(page.locator('#account-balance')).toHaveText('R$ 5.000,00'); 

// });

// test('Validar que login não é realizado quando código de autenticação é inválido.', async ({ page }) => {
  
//   const user = {
//     cpf: '00000014141',
//     password: '147258'
//   }

//   await page.goto('http://paybank-mf-auth:3000/');

//   await page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(user.cpf);
//   await page.getByRole('button', { name: 'Continuar' }).click();

//   for (const digito of user.password){
//     await page.getByRole('button', { name: digito }).click();
//   }

//   await page.getByRole('button', { name: 'Continuar' }).click();
 
//   await page.getByRole('textbox', { name: '000000' }).fill('123456');
//   await page.getByRole('button', { name: 'Verificar' }).click();

//   await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.');

//   code old
//   await page.getByRole('textbox', { name: 'Digite seu CPF' }).fill('00000014141');
//   await page.getByRole('button', { name: 'Continuar' }).click();

//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '4' }).click();
//   await page.getByRole('button', { name: '7' }).click();
//   await page.getByRole('button', { name: '2' }).click();
//   await page.getByRole('button', { name: '5' }).click();
//   await page.getByRole('button', { name: '8' }).click();
//   await page.getByRole('button', { name: 'Continuar' }).click();
 
//   await page.getByRole('textbox', { name: '000000' }).fill('123456');
//   await page.getByRole('button', { name: 'Verificar' }).click();

//   await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.');
  //await page.getByRole('heading', { name: 'Saldo disponível' }).click();
// });