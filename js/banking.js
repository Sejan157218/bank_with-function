//input function
function getInput(inputId){
    const InputField = document.getElementById(inputId);
    const inputAmountValue = InputField.value;
    const inputAmountValueParseFloat = parseFloat(inputAmountValue);
    // clear input
    InputField.value = '';
    return inputAmountValueParseFloat

}
// deposit withdraw function
function depositWithdraw(previousbalance,getDeposit){  
    const totalPreviousbalance = document.getElementById(previousbalance);
    const totalPreviousbalanceInnertext = totalPreviousbalance.innerText;
    const totalPreviousbalanceparseFloat = parseFloat(totalPreviousbalanceInnertext) ;
    const totalNewBalance = totalPreviousbalanceparseFloat + getDeposit;
    totalPreviousbalance.innerText = totalNewBalance;
    return totalPreviousbalance;
}
function totalBalance(){
    const totalAmount = document.getElementById('total-amount');
    const totalAmountValue = totalAmount.innerText;
    const newTotalAmount = parseFloat(totalAmountValue);
    return newTotalAmount;
}
// total balance update
function updateBalance(amount,isAdd){
    const totalAmount = document.getElementById('total-amount');
    // const totalAmountValue = totalAmount.innerText;
    // const newTotalAmount = parseFloat(totalAmountValue);
    const newTotalAmount = totalBalance();
    if (isAdd == true){
        totalAmount.innerText = newTotalAmount + amount;
    }
    else{
        totalAmount.innerText = newTotalAmount - amount;
    }
    
}


// handle deposit button with event
document.getElementById('deposit-button').addEventListener('click',function(){
    const getDeposit = getInput('input-deposit');
    if(getDeposit>0){
        const inputDepositWithdraw = depositWithdraw('total-deposit',getDeposit);
        updateBalance(getDeposit,true);
    }     
})

// handle withdraw button with event
document.getElementById('withdraw-button').addEventListener('click',function(){
    //input field by function
    const getWirhdraw = getInput('input-withdraw');
    const newTotalAmount = totalBalance();
    if(getWirhdraw>0 && getWirhdraw < newTotalAmount){
        const inputDepositWithdraw = depositWithdraw('total-withdraw',getWirhdraw);
        updateBalance(getWirhdraw,false);
    } 
    
})



/*
// handle deposit button with event
document.getElementById('deposit-button').addEventListener('click',function(){
    input field
    const depositInput = document.getElementById('input-deposit');
    const inputAmountValue = depositInput.value;
    // deposit
    const totaldeposit = document.getElementById('total-deposit');
    const totaldepositInnertext = totaldeposit.innerText;
    const newtotaldeposit = parseFloat(totaldepositInnertext) + parseFloat(inputAmountValue);
    totaldeposit.innerText = newtotaldeposit;

    // Total balance after deposit
    const totalAmount = document.getElementById('total-amount');
    const totalAmountValue =totalAmount.innerText;
    const newTotalAmount = parseFloat(inputAmountValue) + parseFloat(totalAmountValue);
    totalAmount.innerText = newTotalAmount;
    // // clear input
     depositInput.value = '';
})

// handle withdraw button with event
document.getElementById('withdraw-button').addEventListener('click',function(){
    //input field
    const withdrawInput = document.getElementById('input-withdraw');
    const withdrawInputValue = withdrawInput.value;
    console.log(withdrawInputValue);
    total withdraw
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawInnertext = totalWithdraw.innerText;
    const newTotalWithdraw = parseFloat(totalWithdrawInnertext) + parseFloat(withdrawInputValue);
    totalWithdraw.innerText = newTotalWithdraw;
    // Total balance after withdraw
    const totalAfterWithdraw = document.getElementById('total-amount');
    const totalAfterWithdrawInner = totalAfterWithdraw.innerText;
    const newTotalAfterWithdraw = parseFloat(totalAfterWithdrawInner) - parseFloat(withdrawInputValue);
    totalAfterWithdraw.innerText = newTotalAfterWithdraw;
    // clear input
    withdrawInput.value = '';
})
*/