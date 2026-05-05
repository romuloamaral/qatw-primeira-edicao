import { TIMEOUT } from "dns/promises";

export class LoginPage {

    constructor(page){
        this.page = page;
        this.headerVerificacao = page.getByRole('heading', { name: 'Verificação em duas etapas' });
    }

    async acessaPagina(){
        //await this.page.goto('http://paybank-mf-auth:3000/');
        await this.page.goto(process.env.BASE_URL);
    }

    async informaCpf(cpf){
        await this.page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(cpf);
        await this.page.getByRole('button', { name: 'Continuar' }).click();
    }

    async informaSenha(senha){
        for (const digito of senha){
            await this.page.getByRole('button', { name: digito }).click();
        }
        await this.page.getByRole('button', { name: 'Continuar' }).click();
    }

    async informa2FA(codigo){
        await this.page.getByRole('textbox', { name: '000000' }).fill(codigo);
        await this.page.getByRole('button', { name: 'Verificar' }).click();
    }

    async waitForTwoFactorSection() {
        await this.headerVerificacao.waitFor({ timeout: 5000 });
  }

}