const socket = io()
//Instranciar el socket. lo utilizaremos para comunicarnos con el server

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