document.getElementById('btn-deposit').addEventListener('click', function(){
const depositField =  document.getElementById('deposit-field');
const depositAmountString = depositField.value;
const depositAmountNumber = parseFloat(depositAmountString);

const totalDeposit = document.getElementById('deposit-total-amount');
const totalDepositString = totalDeposit.innerText;
const totalDepositNumber = parseFloat(totalDepositString); 

const totalDepositAmount = depositAmountNumber + totalDepositNumber;
totalDeposit.innerText = totalDepositAmount;
depositField.value = '';

const totalBalance = document.getElementById('balance-total-amount');
const totalBalanceString = totalBalance.innerText;
const totalBalanceNumber = parseFloat(totalBalanceString);
const balanceTotal = depositAmountNumber + totalBalanceNumber;
totalBalance.innerText = balanceTotal;
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
  const withdrawField = document.getElementById('withdraw-field');
  const withdrawFieldString = withdrawField.value;
  const withdrawFieldNumber = parseFloat(withdrawFieldString);
  withdrawField.value = '';

  const totalWithdraw = document.getElementById('withdraw-total-field');
  const totalWithdrawString = totalWithdraw.innerText;
  const totalWithdrawNumber = parseFloat(totalWithdrawString);
  const totalWithdrawAmount = withdrawFieldNumber + totalWithdrawNumber;
  totalWithdraw.innerText = totalWithdrawAmount;

  const totalBalance = document.getElementById('balance-total-amount');
  const totalBalanceString = totalBalance.innerText;
  const totalBalanceNumber = parseFloat(totalBalanceString);
  const balanceTotal = totalWithdrawAmount - totalBalanceNumber;
  totalBalance.innerText = Math.abs(balanceTotal);

})

