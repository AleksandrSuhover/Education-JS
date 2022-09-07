const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
return data.filter(el => el.amount > 0).reduce((sum, curr) => sum + curr.amount, 0);
}

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
if(data.some(el => el.amount < 0)){
    return data.reduce((sum, curr) => sum + curr.amount, 0);
} else {
    getPositiveIncomeAmount(funds);
}
};

console.log(getTotalIncomeAmount(funds));
