import { DioAccount } from "./DioAccount"

export class CashbackAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (newDeposit: number): void => {
    if(newDeposit <= 0) {
      throw new Error("Valor de depósito inválido")
    }

    if(this.validateStatus()){
      this.balance += newDeposit + 10
      console.log('Voce depositou')
    }
  }
}
