import { CashbackAccount } from './class/CashbackAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
peopleAccount.withdraw(5)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
companyAccount.withdraw(5)
companyAccount.getLoan(10)
console.log(companyAccount)

const cashbackAccount: CashbackAccount = new CashbackAccount('Zé', 10)
cashbackAccount.deposit(10)
cashbackAccount.withdraw(5)
console.log(cashbackAccount)