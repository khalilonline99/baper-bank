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
})