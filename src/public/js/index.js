const socket = io()
//Instranciar el socket. lo utilizaremos para comunicarnos con el server
const form = document.getElementById('form');
const input = document.getElementById('input');

socket.emit('message', 'Hola! me estoy comunicando desde un websocket')
socket.on('evento_para_scoket_individual', data => {
    console.log(data)
})
socket.on('evento_para_todos_menos_el_socket_actual', data => {
    console.log(data)
})
socket.on('evento_para_todos', data => {
    console.log(data)
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('message', input.value);
        input.value = '';
    }
});
socket.on('message', function (msg) {
    let item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});