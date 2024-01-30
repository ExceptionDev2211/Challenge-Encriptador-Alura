
const code = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

function encrypt() {
    let message = document.getElementById('message').value;
    let encryptedMessage = "";
    
    if (message != ""  && validateCharacters(message)) {
        for (var character of message) {
            if (character in code) {
                encryptedMessage = encryptedMessage.concat(code[character]);
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
    if (encryptedMessage !== "" && validateCharacters(encryptedMessage)) {
        for (let i = 0; i < encryptedMessage.length; i++) {
            let currentChar = encryptedMessage.charAt(i);

            if (currentChar in code) {
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
function validateCharacters(message) {
    let i = 0;
    let validate = true;

    while (validate && i < message.length) {
        if ((message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) ||  message.charCodeAt(i) == 32) {
            console.log(message.charCodeAt(i));
            i++;
            
        } else {
            validate = false;
            alert("Solo letras minúsculas sin caracteres especiales");
        }
    }

    return validate;
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
                alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                alert('Error al intentar copiar el texto: ' + err);
            });
    } catch (error) {
        console.error('Error al intentar copiar el texto: ', error);
    }
}