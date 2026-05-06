export class LoginPage {
    
    constructor(page) {
        this.page = page;

        // Elementos (locators centralizados)
        this.cpfInput = page.getByRole('textbox', { name: 'Digite seu CPF' });
        this.continuarButton = page.getByRole('button', { name: 'Continuar' });

        this.tecladoNumerico = (digito) =>
            page.getByRole('button', { name: digito });

        this.input2FA = page.getByRole('textbox', { name: '000000' });
        this.botaoVerificar = page.getByRole('button', { name: 'Verificar' });

        this.headerVerificacao = page.getByRole('heading', {
            name: 'Verificação em duas etapas'
        });

        this.erroCodigoInvalido = page.getByText('Código inválido. Por favor, tente novamente.');
    }

    // Navegação
    async acessarPagina() {
        if (!process.env.BASE_URL) {
            throw new Error('BASE_URL não definido no .env');
        }

        await this.page.goto(process.env.BASE_URL);
    }

    // Ações
    async preencherCpf(cpf) {
        await this.cpfInput.fill(cpf);
        await this.continuarButton.click();
    }

    async preencherSenha(senha) {
        for (const digito of senha) {
            await this.tecladoNumerico(digito).click();
        }
        await this.continuarButton.click();
    }

    async preencher2FA(codigo) {
        await this.input2FA.fill(codigo);
        await this.botaoVerificar.click();
    }

    async aguardarTela2FA() {
        await this.headerVerificacao.waitFor({ timeout: 5000 });
    }

}



// import { TIMEOUT } from "dns/promises";

// export class LoginPage {

//     constructor(page){
//         this.page = page;
//         this.headerVerificacao = page.getByRole('heading', { name: 'Verificação em duas etapas' });
//     }

//     async acessaPagina(){
//         //await this.page.goto('http://paybank-mf-auth:3000/');
//         await this.page.goto(process.env.BASE_URL);
//     }

//     async informaCpf(cpf){
//         await this.page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(cpf);
//         await this.page.getByRole('button', { name: 'Continuar' }).click();
//     }

//     async informaSenha(senha){
//         for (const digito of senha){
//             await this.page.getByRole('button', { name: digito }).click();
//         }
//         await this.page.getByRole('button', { name: 'Continuar' }).click();
//     }

//     async informa2FA(codigo){
//         await this.page.getByRole('textbox', { name: '000000' }).fill(codigo);
//         await this.page.getByRole('button', { name: 'Verificar' }).click();
//     }

//     async waitForTwoFactorSection() {
//         await this.headerVerificacao.waitFor({ timeout: 5000 });
//   }

// }