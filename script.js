/* Execute o script apenas quando a página for totalmente carregada*/
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("submitButton");
    var qrcode = new QRCode("qrcode", {
        width: 130,
        height: 130,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    button.addEventListener("click", function () {
        var URL = document.getElementById("url1");
        var conteudoURL = URL.value;

        if (!conteudoURL) {
            alert("Coloque um link!");
            URL.focus();
            return;
        }

        qrcode.makeCode(conteudoURL);
    });
});
