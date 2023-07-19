var myName = "";
myName = "test";
// Arrays
var items = [];
var account = {
    name: "Seth",
    balance: 10,
};
var accounts;
// classes
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () { };
    return InvestmentAccount;
}());
