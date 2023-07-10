// 1. 숫자 비교하기
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

// 2. 두 수의 차
// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

function solution(num1, num2) {
  return num1 - num2;
}

// 3. 몫 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  return Math.floor(num1 / num2);
}

// 4. 나머지 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  return Math.floor(num1 % num2);
}

// 5. 두 수의 곱
// 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  return num1 * num2;
}

// 6. 나이 출력
// 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

function solution(age) {
  let a = 2022 - age + 1;
  return a;
}

// 7. 두 수의 합
// 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.

function solution(num1, num2) {
  return num1 + num2;
}

// 8. 두 수의 나눗셈
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

// 9. 각도기
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if ((90 < angle, angle < 180)) {
    return 3;
  } else if ((angle = 180)) {
    return 4;
  }
}

// 10. 짝수의 합
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
  let a = 0;
  for(let b = 0; b <= n; b += 2){
      a += b
  }return a;
}

// 11. 배열의 평균값
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

⭕
function solution(numbers) {
  let a = 0;
  for(let b = 0; b <= numbers.length-1; b++){
      a += numbers[b]
  }return a / numbers.length;
}


// 12. 양꼬치
// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

⭕
function solution(n, k) {
  let a = (n * 12000) + (k * 2000);
  let b = parseInt(n / 10) * 2000;
  return a - b;
}

// 13. 편지
// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

⭕
function solution(message) {
  return message.length * 2;
}


// 14. 배열 뒤집기
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  return num_list.reverse()
}