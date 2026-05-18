// Generated from: features\dashboard.feature
import { test } from "playwright-bdd";

test.describe('Dashboard', () => {

  test('Validar Ultimas Transacoes', async ({ Given, When, Then, page }) => { 
    await Given('que o usuário realiza login', null, { page }); 
    await When('acessar a lista de ultimas transações', null, { page }); 
    await Then('deve visualizar o pagamento do Salário', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\dashboard.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que o usuário realiza login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When acessar a lista de ultimas transações","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then deve visualizar o pagamento do Salário","stepMatchArguments":[]}]},
]; // bdd-data-end