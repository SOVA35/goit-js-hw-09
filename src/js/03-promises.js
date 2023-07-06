import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const objectPromise = { position, delay };


  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(objectPromise)
    } else {
      reject(objectPromise);
    }
  });
};


const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();

  let delay = Number(evt.target.delay.value);
  const step = Number(evt.target.step.value);
  const amount = Number(evt.target.amount.value);

  for (let position = 1; position <= amount; position += 1){
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        }, delay);    
      })
    .catch(({ position, delay }) => {
      setTimeout(() => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`)
      }, delay)
    });
  delay += step;
}
  evt.target.reset();
};


