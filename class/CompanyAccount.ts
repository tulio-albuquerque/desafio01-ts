import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (newLoan: number): void => {
    if(newLoan <= 0) {
      throw new Error("Valor de empréstimo inválido")
    }

    if(this.validateStatus()) {
      this.balance += newLoan 
    }
  }
}
