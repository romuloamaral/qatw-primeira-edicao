export class DashPage {

    constructor(page) {
        this.page = page;
        // localizadores - locators
        this.saldo = page.locator('#account-balance');
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