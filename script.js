const wrapper = document.querySelector('.wrapper'),
    qrInput = document.querySelector('.form input'),
    generateBtn = document.querySelector('.form button'),
    qrImg = document.querySelector('.qr-code img')

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;  // if the input is empty then return from here
    // passing the api returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    wrapper.classList.add('active');
});