let myName: string | null = "";
myName = "test";

// Arrays
let items: string[] | number[] = [];

// objects

interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposite?: () => void;
}

const account: IAccount = {
  name: "Seth",
  balance: 10,
};

let accounts: IAccount[];

// classes

class InvestmentAccount implements IAccount {

    constructor(public name, public balance) { }
    
    private withdraw(){}
}
