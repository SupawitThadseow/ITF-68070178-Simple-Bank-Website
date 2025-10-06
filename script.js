const my_input = document.getElementById("my_input")
let current_value = 1

function calc(x) {
	current_value += Number(x) // Calculate Variable `current_value`
	my_input.value = current_value // Set my_input Value to `current_value`
}

let accountBalance = 0;
let cashBalance = 0;

// ฟังก์ชันแสดงผลในจอ terminal
function showTerminal(message) {
    document.querySelector('.bigbox p.subbox').innerText = message;
}

// ฟังก์ชันตั้งค่า Balance เริ่มต้น
function setBalances() {
    accountBalance = parseFloat(document.getElementById("my_account").value) || 0;
    cashBalance = parseFloat(document.getElementById("my_cash").value) || 0;
    showTerminal(`Balances set → Account: ${accountBalance} | Cash: ${cashBalance}`);
}

// ฟังก์ชันดำเนินการฝากหรือถอน
function performBankOperation() {
    const operation = document.getElementById("options1").value;
    const amount = parseFloat(document.getElementById("my_input").value) || 0;

    if (operation === "1") { // Deposit
        if (amount > cashBalance) {
            showTerminal(`❌ Not enough cash to deposit!`);
            return;
        }
        accountBalance += amount;
        cashBalance -= amount;
        showTerminal(`✅ Deposited ${amount}. Account: ${accountBalance}, Cash: ${cashBalance}`);
    } 
    else if (operation === "2") { // Withdraw
        if (amount > accountBalance) {
            showTerminal(`❌ Not enough balance to withdraw!`);
            return;
        }
        accountBalance -= amount;
        cashBalance += amount;
        showTerminal(`✅ Withdrew ${amount}. Account: ${accountBalance}, Cash: ${cashBalance}`);
    }

    // อัปเดตค่าใน input ด้วย
    document.getElementById("my_account").value = accountBalance;
    document.getElementById("my_cash").value = cashBalance;
}

// ฟังก์ชันแปลงสกุลเงิน
function convertCurrency() {
    const amount = parseFloat(document.getElementById('in_bal').value) || 0;
    const currency = document.getElementById('options2').value;
    let result = 0;

    const rateUSDToTHB = 35;
    const rateTHBToUSD = 1 / 35;

    if (currency === '1') { // USD → THB
        result = amount * rateUSDToTHB;
        showTerminal(`💱 Converted ${amount} USD → ${result.toFixed(2)} THB`);
    } else if (currency === '2') { // THB → USD
        result = amount * rateTHBToUSD;
        showTerminal(`💱 Converted ${amount} THB → ${result.toFixed(2)} USD`);
    }

    document.getElementById('out_bal').value = result.toFixed(2);
}
