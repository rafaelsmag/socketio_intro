if (Notification.permission === 'default') {
  Notification.requestPermission(() => {
    console.log('O usuário ainda não deu permissão');
  });
}
var notify = function (data, type) {
  var notification = new Notification(data.title, {
    body: data.msg,
    icon: '/image/' + type + '.png'
  });
}

var socket = io('http://localhost:3000');

socket.on('hello', function(msg) {
  //console.log(msg);
  notify(msg, 'user');
});