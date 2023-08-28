// dom에서 phath 찾기
const path = document.querySelector("#path");
const openBtn = document.querySelector(".btn-open");

// path의 전체 길이 구하기
const pathLength = path.getTotalLength();
console.log(pathLength);

// dash 의 길이와 공백
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// dash를 어디서부터 그릴지
path.style.strokeDashoffset = pathLength;

console.log("clientHeight", document.documentElement.clientHeight);
console.log("scrollHeight", document.documentElement.scrollHeight);

function scrollHandler() {
  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop;

  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight;

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;

  // 스크롤의 위치 => %
  // 전체 스크롤 영역 높이에서 뷰포트 크기만큼을 빼 줌
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

  const drawLength = pathLength * scrollPercentage;

  // pathLength -> 0
  path.style.strokeDashoffset = pathLength - drawLength;

  // button opacity 조절
  openBtn.style.opacity = scrollPercentage;

  if (scrollPercentage >= 0.8) {
    openBtn.disabled = false;
  } else {
    openBtn.disabled = true;
  }
}

window.addEventListener("scroll", scrollHandler);
