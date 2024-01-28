
const values = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}
var anchoPantalla = window.screen.width;
var altoPantalla = window.screen.height;

// Muestra la resolución en la consola
console.log('Ancho de la pantalla: ' + anchoPantalla + ' píxeles');
console.log('Alto de la pantalla: ' + altoPantalla + ' píxeles');

function encrypt() {
    var message = document.getElementById('message').value;
    var encryptedMessage = "";
    if (message != "") {
        for (var character of message) {
            if (character in values) {
                encryptedMessage = encryptedMessage.concat(values[character]);
            } else {
                encryptedMessage = encryptedMessage.concat(character);
            }
        }
        var encryptedArea = document.getElementById('textEncrypted');
        encryptedArea.value = encryptedMessage;
        showText();
    }
}

function decrypt() {
    let encryptedMessage = document.getElementById('message').value;
    let message = '';
    if (encryptedMessage !== "") {
        for (let i = 0; i < encryptedMessage.length; i++) {
            let currentChar = encryptedMessage.charAt(i);

            if (currentChar in values) {
                switch (currentChar) {
                    
                        
                    case 'a':
                        message += 'a';
                        i += 1;
                        break;
                    case 'e':
                        message += 'e';
                        i += 4;
                        break;
                    case 'i':
                        message += 'i';
                        i += 3;
                        break;
                    case 'o':
                        message += 'o';
                        i += 3;
                        break;
                    case 'u':
                        message += 'u';
                        i += 3;
                        break;
                    default:
                        
                        break;
                }
            } else {
                message += currentChar;
            }
        }
        console.log(message)
        var encryptedArea = document.getElementById('textEncrypted');
        encryptedArea.value = message;
        showText();
    }

}

function showText() {
    let image = document.querySelector('#imagenLupa');
    let paragraph = document.querySelector('.encryptParagraph');
    let paragraph2 = document.querySelector('.encryptParagraph2');
    let textEncrypted = document.querySelector('#textEncrypted');
    let button = document.querySelector('.copy');
    if (textEncrypted.style.display === 'none') {
        textEncrypted.style.display = 'inline-block';
        image.style.display = 'none';
        paragraph.style.display = 'none';
        paragraph2.style.display = 'none';
        button.style.display = 'inline-block'
    }

}
function copyText() {
    try {
        let text = document.getElementById('textEncrypted');
        text.select();
        navigator.clipboard.writeText(text.value)
            .then(() => {
                alert('¡Texto copiado al portapapeles!');
            })
            .catch(err => {
                alert('Error al intentar copiar el texto: ' + err);
            });
    } catch (error) {
        console.error('Error al intentar copiar el texto: ', error);
    }
}