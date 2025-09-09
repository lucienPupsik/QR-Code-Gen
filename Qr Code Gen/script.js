function generateQR() {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(qrText.value);

    imgBox.classList.remove("show-img");
    qrImage.onload = function() {
        imgBox.classList.add("show-img");
    };
    qrImage.src = url;
}