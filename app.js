
const values = {
    a : 'ai',
    e : 'enter',
    i : 'imes',
    o : 'ober',
    u : 'ufat'
}


function encrypt() {
    var message = document.getElementById('message').value;
    var encryptedMessage = "";

    for (var character of message) {
        if (character in values) {
            encryptedMessage = encryptedMessage.concat(values[character]);
        } else {
            encryptedMessage = encryptedMessage.concat(character);
        }
    }
    var encryptedArea = document.getElementById('encrypted');
    encryptedArea.value = encryptedMessage;

}

function decrypt(){
    let encryptedMessage = document.getElementById('message').value;
    let message = '';

    for (let caracter of encryptedMessage){
        
    }
}