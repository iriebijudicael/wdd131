
const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

button.addEventListener('click', () => {
  const inputValue = input.value.trim();

  if (inputValue !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = inputValue;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${inputValue}`);

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = '';

    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();
    });
  } else {
    alert('Please enter a valid chapter.');
  }
});