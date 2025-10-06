const my_input = document.getElementById("my_input")
let current_value = 1

function calc(x) {
	current_value += Number(x) // Calculate Variable `current_value`
	my_input.value = current_value // Set my_input Value to `current_value`
}

// ตัวแปรเก็บ balance
let accountBalance = 0;
let cashBalance = 0;

// ฟังก์ชัน Set Balance จาก input
function setBalances() {
  const accountInput = parseFloat(document.getElementById('my_account').value) || 0;
  const cashInput = parseFloat(document.getElementById('my_cash').value) || 0;

  accountBalance = accountInput;
  cashBalance = cashInput;

  updateDisplay();
}

// ฟังก์ชัน Bank Operation
function processBank() {
  const operation = document.getElementById('options1').value;
  const amount = parseFloat(document.getElementById('my_input').value) || 0;

  if(operation === 'deposit') {
    accountBalance += amount;
  } else if(operation === 'withdraw') {
    if(amount > accountBalance) {
      alert("ยอดเงินไม่เพียงพอ!");
      return;
    }
    accountBalance -= amount;
    cashBalance += amount;
  }

  updateDisplay();
}

// ฟังก์ชันอัปเดตการแสดงผล
function updateDisplay() {
  document.getElementById('my_account').value = accountBalance.toFixed(2);
  document.getElementById('my_cash').value = cashBalance.toFixed(2);
}
