// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('Login com sucesso', async ({ Given, When, Then, And, page }) => { 
    await Given('que o usuário acessa a página de login', null, { page }); 
    await When('informa CPF e senha válidos', null, { page }); 
    await And('informa o código 2FA válido', null, { page }); 
    await Then('deve visualizar o saldo "R$ 5.000,00"', null, { page }); 
  });

  test('Login com código 2FA inválido', async ({ Given, When, Then, And, page }) => { 
    await Given('que o usuário acessa a página de login', null, { page }); 
    await When('informa CPF e senha válidos', null, { page }); 
    await And('informa o código 2FA "123456"', null, { page }); 
    await Then('deve visualizar a mensagem "Código inválido. Por favor, tente novamente."', null, { page }); 
  });

  test('Login com CPF inválido', async ({ Given, When, Then, page }) => { 
    await Given('que o usuário acessa a página de login', null, { page }); 
    await When('informa CPF "11122233377"', null, { page }); 
    await Then('deve visualizar a mensagem "CPF inválido. Por favor, verifique."', null, { page }); 
  });

  test('Login com senha inválida', { tag: ['@debug'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('que o usuário acessa a página de login', null, { page }); 
    await When('informa CPF válido', null, { page }); 
    await And('iforma senha "111111"', null, { page }); 
    await Then('deve visualizar a mensagem "Acesso negado. Por favor, tente novamente."', null, { page }); 
  }); 

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que o usuário acessa a página de login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When informa CPF e senha válidos","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And informa o código 2FA válido","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then deve visualizar o saldo \"R$ 5.000,00\"","stepMatchArguments":[{"group":{"start":24,"value":"\"R$ 5.000,00\"","children":[{"start":25,"value":"R$ 5.000,00","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given que o usuário acessa a página de login","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When informa CPF e senha válidos","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And informa o código 2FA \"123456\"","stepMatchArguments":[{"group":{"start":21,"value":"\"123456\"","children":[{"start":22,"value":"123456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then deve visualizar a mensagem \"Código inválido. Por favor, tente novamente.\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Código inválido. Por favor, tente novamente.\"","children":[{"start":28,"value":"Código inválido. Por favor, tente novamente.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given que o usuário acessa a página de login","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When informa CPF \"11122233377\"","stepMatchArguments":[{"group":{"start":12,"value":"\"11122233377\"","children":[{"start":13,"value":"11122233377","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then deve visualizar a mensagem \"CPF inválido. Por favor, verifique.\"","stepMatchArguments":[{"group":{"start":27,"value":"\"CPF inválido. Por favor, verifique.\"","children":[{"start":28,"value":"CPF inválido. Por favor, verifique.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":23,"tags":["@debug"],"steps":[{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given que o usuário acessa a página de login","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When informa CPF válido","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And iformar senha \"111111\"","stepMatchArguments":[{"group":{"start":14,"value":"\"111111\"","children":[{"start":15,"value":"111111","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then deve visualizar a mensagem \"Acesso negado. Por favor, tente novamente.\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Acesso negado. Por favor, tente novamente.\"","children":[{"start":28,"value":"Acesso negado. Por favor, tente novamente.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end