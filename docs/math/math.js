
function compute(type, ...args) {
  // 计算放大倍数
  const getPower = (numbers) => {
    const lens = numbers.map(num => num.toString().split(".")[1]?.length || 0);
    // 获取最大长度
    const len = Math.max(...lens);
    // 计算返回放大倍数
    return Math.pow(10, len)
  }

  // 获取放大倍数
  const power = getPower(args);

  // 获取放大后的值
  const newNumbers = args.map(num => Math.round(num * power));

  // 计算结果
  let result = 0;
  switch (type) {
    case "+":
      result = newNumbers.reduce((preNumber, nextNumber) => preNumber + nextNumber, result) / power;
      break;
    case "-":
      result = newNumbers.reduce((preNumber, nextNumber) => preNumber - nextNumber) / power;
      break;
    case "*":
      result = newNumbers.reduce((preNumber, nextNumber) => preNumber * nextNumber) / (power ** newNumbers.length);
      break;
    case "/":
      result = newNumbers.reduce((preNumber, nextNumber) => preNumber / nextNumber);
      break;
  }

  return {
    result,
    next(nextType, ...nextArgs) {
      return compute(nextType, result, ...nextArgs);
    }
  }
}

const arr = [0.1, 0.2, 29.6]
const a = compute('+', ...arr);
const b = a.next('-', 4, 2, 4);
const c = b.next('*', 100);
const d = c.next('+', 2798.4);
const e = d.next('*', 100);
const f = e.next('/', 1000);
const r = compute('+', ...arr).next('-', 4, 2, 4).next('*', 100).next('+', 2798.4).next('*', 100).next('/', 1000);

console.log('a: ', a.result) // a:  29.9
console.log('b: ', b.result) // b:  19.9
console.log('c: ', c.result) // c:  1990
console.log('d: ', d.result) // d:  4788.4
console.log('e: ', e.result) // e:  478840
console.log('f: ', f.result) // f:  478.84
console.log('r: ', r.result) // f:  478.84
