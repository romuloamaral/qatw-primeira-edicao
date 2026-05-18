export class DashPage {

    constructor(page) {
        this.page = page;
        // localizadores - locators
        this.saldo = page.locator('#account-balance');

        this.tituloSaldoDisponivel = page.getByRole('heading', {
            name: 'Saldo disponível'
        });

        this.tituloUltimasTranzsacoes = page.getByRole('heading', {
            name: 'Últimas transações'
        });

        this.txtPagamentoSalario = page.getByText('Salário');

    }


    async aguardarListaUltimasTransacoes() {
        await this.tituloUltimasTranzsacoes.waitFor({ timeout: 5000 });
    }

}


// export class DashPage{
    
//     constructor(page){
//         this.page = page;
//     }
    
//     async obterSaldo(){
//         return this.page.locator('#account-balance');
//     }
// }