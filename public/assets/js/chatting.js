const socket = io();

socket.on('send back', (msg) => {
    console.log(msg);
})

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const _message = {
        message: form.message.value,
        receiver: "2345678"
    }

    socket.emit('send message', _message);
    form.message.value = ""
})