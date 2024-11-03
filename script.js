
const contactBtn = document.querySelector('.btn-contact');

contactBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    contactBtn.style.backgroundColor = randomColor; // Correct way to change background color
});

const changeBgBtn = document.getElementById('change-bg-btn');
changeBgBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

