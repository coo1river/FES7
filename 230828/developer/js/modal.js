const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const dim = document.querySelector(".dim");

const focusableEl = modal.querySelectorAll("a, button");

const firstEl = focusableEl[0];
const lastEl = focusableEl[focusableEl.length - 1];

function openModal() {
  modal.classList.add("active");
  document.documentElement.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("active");
  document.documentElement.style.overflow = "auto";
}

function handleTab(e) {
  //e.key : 누른 key 정보 반환
  const activeEl = document.activeElement;
  if (e.key === "Tab") {
    if (e.shiftKey) {
      // tab + shift 같이 눌렀을 때
      if (activeEl === firstEl) {
        e.preventDefault();
        lastEl.focus();
      }
    } else {
      // tab 만 눌렀을 때
      if (activeEl === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  }
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
dim.addEventListener("click", closeModal);

firstEl.addEventListener("keydown", handleTab);
lastEl.addEventListener("keydown", handleTab);
