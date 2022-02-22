const id = document.querySelector('.advice__id');
const advice = document.querySelector('.advice__text');
const adviceBtn = document.querySelector('.advice__btn')

function fetchAdvice(){
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
      id.textContent = `advice #${data['slip']['id']}`;
      advice.textContent = `“${data['slip']['advice']}”`
  });
}
fetchAdvice()

adviceBtn.addEventListener('click', fetchAdvice)