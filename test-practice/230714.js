// 1. 점의 위치 구하기
// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

function solution(dot) {
  switch (true) {
    case dot[0] >= 0 && dot[1] >= 0:
      return 1;
    case dot[0] < 0 && dot[1] >= 0:
      return 2;
    case dot[0] < 0 && dot[1] < 0:
      return 3;
    case dot[0] >= 0 && dot[1] < 0:
      return 4;
  }
}

// 2. 모음 제거
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return my_string
    .split("")
    .filter((b) => !vowels.includes(b))
    .join("");
}

// 3. 짝수 홀수 개수
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  const a = num_list.filter((b) => b % 2 === 0);
  const c = num_list.filter((d) => d % 2 === 1);
  return [a.length, c.length];
}

// 4. 아이스 아메리카노
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(money) {
  const a = parseInt(money / 5500);
  const b = money % 5500;
  const c = [a, b];
  return c;
}

// 5. 배열의 유사도
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
  return s1.filter((a) => s2.includes(a)).length;
}

// 6. 배열 자르기
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}
