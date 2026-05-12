const catCard = document.getElementById('cat-card');
const catImage = document.getElementById('cat-image');
const meowAudio = document.getElementById('meow-audio');
const counterValue = document.getElementById('counter-value');

let isMeowing = false;
let meowCount = 0;

catCard.addEventListener('click', () => {
  if (isMeowing) return;
  isMeowing = true;

  // 카운터 증가
  meowCount++;
  counterValue.textContent = meowCount;

  // 이미지 변경 + 소리 재생
  catImage.src = 'images/meow.jpeg';
  meowAudio.currentTime = 0;
  meowAudio.play().catch(() => {});

  // 소리 끝나면 원래 이미지로 복귀
  const revert = () => {
    catImage.src = 'images/default.jpeg';
    isMeowing = false;
  };

  meowAudio.addEventListener('ended', revert, { once: true });
  setTimeout(() => { if (isMeowing) revert(); }, 3000);
});
