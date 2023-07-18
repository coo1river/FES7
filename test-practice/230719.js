// 1. 제곱수 판별하기
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  return n % Math.sqrt(n) === 0 ? 1 : 2;
}
// 2. 세균 증식
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

function solution(n, t) {
  let cnt = n;
  for (let i = 1; i <= t; i++) {
    cnt *= 2;
  }
  return cnt;
}

// 3. 가위 바위 보
// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

function solution(rsp) {
  const a = [];
  for (let i = 0; i < rsp.length; i++) {
    a.push(rsp[i] === "2" ? 0 : rsp[i] === "0" ? 5 : rsp[i] === "5" ? 2 : null);
  }
  return a.join("");
}

// 4. 암호 해독
// - 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// -암호화된 문자열 cipher를 주고받습니다.
// - 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(cipher, code) {
  let arr = [];
  for (let i = 1; i <= cipher.length; i++) {
    if (i % code === 0) {
      arr.push(cipher[i - 1]);
    }
  }
  return arr.join("");
}

// 5. 대문자와 소문자
// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let a = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
      a += my_string[i].toLowerCase();
    } else if (my_string[i] === my_string[i].toLowerCase()) {
      a += my_string[i].toUpperCase();
    }
  }
  return a;
}
