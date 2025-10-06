const my_input = document.getElementById("my_input")
let current_value = 1

function calc(x) {
	current_value += Number(x) // Calculate Variable `current_value`
	my_input.value = current_value // Set my_input Value to `current_value`
}

// ตัวแปรเก็บ balance
let accountBalance = 0;
let cashBalance = 0;

// ฟังก์ชันแสดงผลที่ terminal
function showTerminal(message) {
  const terminal = document.getElementById('terminal');
  terminal.textContent = message;
}

// ฟังก์ชัน Set Balance จาก input
function setBalances() {
  const accountInput = parseFloat(document.getElementById('my_account').value) || 0;
  const cashInput = parseFloat(document.getElementById('my_cash').value) || 0;

  accountBalance = accountInput;
  cashBalance = cashInput;

  updateDisplay();

  showTerminal(`Balances set: Account = ${accountBalance.toFixed(2)}, Cash = ${cashBalance.toFixed(2)}`);
}

// ฟังก์ชัน Bank Operation
function processBank() {
  const operation = document.getElementById('options1').value;
  const amount = parseFloat(document.getElementById('my_input').value) || 0;

  let message = '';

  if (operation === 'deposit') {
    accountBalance += amount;
    message = `Deposited ${amount.toFixed(2)} to account.`;
  } else if (operation === 'withdraw') {
    if (amount > accountBalance) {
      message = `Cannot withdraw ${amount.toFixed(2)}: insufficient funds!`;
      showTerminal(message);
      return;
    }
    accountBalance -= amount;
    cashBalance += amount;
    message = `Withdrew ${amount.toFixed(2)} from account. Cash balance increased.`;
  }

  updateDisplay();
  showTerminal(`${message} Current Account = ${accountBalance.toFixed(2)}, Cash = ${cashBalance.toFixed(2)}`);
}

// ฟังก์ชันอัปเดตการแสดงผลใน input
function updateDisplay() {
  document.getElementById('my_account').value = accountBalance.toFixed(2);
  document.getElementById('my_cash').value = cashBalance.toFixed(2);
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById('in_bal').value) || 0;
  const currency = document.getElementById('options2').value;

  let result = 0;

  // ตัวอย่างสมมติอัตราแลกเปลี่ยน
  const rateUSDToTHB = 35; // 1 USD = 35 THB
  const rateTHBToUSD = 1/35; // 1 THB = 0.02857 USD

  if(currency === 'USD') {
    // แปลง USD → THB
    result = amount * rateUSDToTHB;
  } else if(currency === 'THB') {
    // แปลง THB → USD
    result = amount * rateTHBToUSD;
  }

  document.getElementById('out_bal').value = result.toFixed(2);

  // แสดง log ใน terminal
  showTerminal(`Converted ${amount} ${currency} → ${result.toFixed(2)} ${currency === 'USD' ? 'THB' : 'USD'}`);
}