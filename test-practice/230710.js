// 2. 피자 나눠 먹기(1)
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function solution(n) {
  return parseInt(n % 7 === 0 ? n / 7 : n / 7 + 1);
}

// 4.삼각형의 완성조건 (1)
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
//가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
//삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
  const a = sides.sort((a, b) => b - a);
  return a[0] < a[1] + a[2] ? 1 : 2;
}

// 5. 머쓱이보다 키 큰 사람
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

function solution(array, height) {
  let a = 0;
  array.forEach(function (b) {
    if (b > height) {
      a++;
    }
  });
  return a;
}

// 6. 배열 원소의 길이
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

function solution(strlist) {
  let a = [];
  strlist.forEach(function (b) {
    a.push(b.length);
  });
  return a;
}

// 7. 문자열 뒤집기
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

let c = [];
function solution(my_string) {
  const a = my_string.split("");
  return a.reverse().join("");
}

// 8. 중복된 숫자 개수
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

function solution(array, n) {
  let a = array.filter(function (b) {
    return b === n;
  });
  return a.length;
}

// 10. 특정 문자 제거하기
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
  const a = my_string.split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] == letter) {
      a.splice(i, 1);
      i--;
    }
  }
  return a.join("");
}
