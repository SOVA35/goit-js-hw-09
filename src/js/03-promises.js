import { Notify } from "notiflix";

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({ position, delay })
  } else {
    reject({ position, delay })
  }
}

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();

  let delay = Number(e.currentTarget.delay.value);
  const step = Number(evt.currentTarget.step.value);
  const amount = Number(evt.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1);
  delay += step;
  createPromise(position, delay)
    .then(({ position, delay }) => {
      setTimeout(() => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      }, delay);
    
    })
    .cath(({ position, delay }) => {
      setTimeout(() => {
        Notify.errror(`Rejected promise ${position} in $ {delay}ms`)
      }, delay)
    });
  evt.currentTarget.reset();
};


