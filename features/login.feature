Feature: Login

  Scenario: Login com sucesso
    Given que o usuário acessa a página de login
    When informa CPF e senha válidos
    And informa o código 2FA válido
    Then deve visualizar o saldo "R$ 5.000,00"


  Scenario: Login com código 2FA inválido
    Given que o usuário acessa a página de login
    When informa CPF e senha válidos
    And informa o código 2FA "123456"
    Then deve visualizar a mensagem "Código inválido. Por favor, tente novamente."


  Scenario: Login com CPF inválido
    Given que o usuário acessa a página de login
    When informa CPF "11122233377"
    Then deve visualizar a mensagem "CPF inválido. Por favor, verifique."

  @debug
  Scenario: Login com senha inválida
    Given que o usuário acessa a página de login
    When informa CPF válido
    And iforma senha "111111"
    Then deve visualizar a mensagem "Acesso negado. Por favor, tente novamente."