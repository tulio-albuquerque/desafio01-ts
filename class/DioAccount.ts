export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (newDeposit: number): void => {
    if(newDeposit <= 0) {
      throw new Error("Valor de depósito inválido")
    }

    if(this.validateStatus()){
      this.balance += newDeposit
      console.log('Voce depositou')
    }
  }

  withdraw = (newWithdraw: number): void => {
    if(newWithdraw <= 0) {
      throw new Error("Valor de saque inválido")
    }
    if(this.balance - newWithdraw < 0) {
      throw new Error("Saldo insuficiente")
    }

    if(this.validateStatus()) {
      this.balance -= newWithdraw
      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
