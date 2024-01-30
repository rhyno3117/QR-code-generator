const wrapper = document.querySelector('.wrapper'),
    qrInput = document.querySelector('.form input'),
    generateBtn = document.querySelector('.form button'),
    qrImg = document.querySelector('.qr-code img');
    const downloadBtn = document.querySelector('#download');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;  // if the input is empty then return from here
    generateBtn.innerText = "Generating QR Code..."; // Use innerText instead of innerHTML
    // passing the API returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove('active');
    }
});

downloadBtn.addEventListener("click", async () => {
    const response = await fetch(qrImg.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
});