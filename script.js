const submitBtn = document.querySelector('.submitBtn');
const thankYou = document.querySelector('.thank-you');
const container = document.querySelector('.container');
const rate = document.querySelector('.rate');
const ratingBtn = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', () => {
    thankYou.classList.remove("hidden");
    container.style.display = "none";
})

ratingBtn.forEach((rating) => { 
  rating.addEventListener('click', () => { 
      rate.innerHTML = rating.innerHTML; 
  })
});
