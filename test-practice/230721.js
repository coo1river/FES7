// 개미 군단
// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
function solution(hp) {
  let result = 0;
  for (let i = 5; i > 0; i -= 2) {
    result += parseInt(hp / i);
    hp = parseInt(hp % i);
  }
  return result;
}

// 직각삼각형 출력하기
// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let star = "";
  for (let i = 1; i <= input[0]; i++) {
    star += "*";
    console.log(star);
  }
});

// n의 배수 고르기
//정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n, numlist) {
  let arr = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) arr.push(numlist[i]);
  }
  return arr;
}

// 최댓값 만들기 (2)
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  numbers.sort((a, b) => b - a);

  let a = numbers[0] * numbers[1];
  let b = numbers[numbers.length - 2] * numbers[numbers.length - 1];

  return Math.max(a, b);
}

// 문자열 정렬하기 (1)
// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
function solution(my_string) {
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) {
      arr.push(Number(my_string[i]));
    }
  }
  return arr.sort((a, b) => a - b);
}
