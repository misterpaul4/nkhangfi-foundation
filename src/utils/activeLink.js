const setActive = link => {
  const element = document.querySelector(`.${link}`);
  element.classList.add('active');
}

const removeActive = link => {
  const element = document.querySelector(`.${link}`);
  element.classList.remove('active');
}

export { setActive, removeActive };
