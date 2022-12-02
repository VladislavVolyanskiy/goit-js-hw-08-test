import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';

let dataToStore = {};

function onFormSubmit(event) {
  event.preventDefault();

  const formInputs = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };

  if (formInputs.email === '' || formInputs.message === '') {
    alert('Please fill all fileds');
    return;
  }

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}

function onInput() {
  dataToStore = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataToStore));
}

function renderStored() {
  const storedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (storedData) {
    const StoredArr = JSON.parse(storedData);
    formRef.elements.email.value = StoredArr.email;
    formRef.elements.message.value = StoredArr.message;
  }
}

renderStored();

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onInput, 500));
