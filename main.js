// Задание 1
function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new Error("Возраст должен быть от 0 до 120 лет!");
  }
  console.log(`Возраст корректный: ${age}`);
}

try {
  checkAge(150);
} catch (error) {
  console.log(`Произошла ошибка: ${error.message}`);
}


// Задание 2
function loadData() {
  if (Math.random() < 0.4) {
    throw new Error("Не удалось загрузить данные");
  }
  return "Данные успешно загружены";
}

let successCount = 0;
let errorCount = 0;

for (let i = 1; i <= 10; i++) {
  try {
    let result = loadData();
    console.log(`Попытка ${i}: ${result}`);
    successCount++;
  } catch (error) {
    console.log(`Попытка ${i}: Ошибка -> ${error.message}`);
    errorCount++;
  }
}

console.log("--- Итог из 10 попыток ---");
console.log(`Успешных загрузок: ${successCount}`);
console.log(`Ошибок: ${errorCount}`);


// Задание 3
function withdraw(balance, amount) {
  if (amount < 0) {
    let err = new Error("Сумма снятия не может быть отрицательной");
    err.code = "NEGATIVE_AMOUNT";
    throw err;
  }
  
  if (amount > balance) {
    let err = new Error("Недостаточно средств на счете");
    err.code = "NOT_ENOUGH_MONEY";
    throw err;
  }
  
  let newBalance = balance - amount;
  console.log(`Снятие прошло успешно! Остаток: ${newBalance}`);
  return newBalance;
}

try {
  let currentBalance = 1000;
  withdraw(currentBalance, -50); 
} catch (error) {
  switch (error.code) {
    case "NEGATIVE_AMOUNT":
      console.log("Ошибка операции: Нельзя снять отрицательную сумму.");
      break;
    case "NOT_ENOUGH_MONEY":
      console.log("Ошибка операции: Недостаточно средств на балансе.");
      break;
    default:
      console.log(`Неизвестная ошибка: ${error.message}`);
  }
}