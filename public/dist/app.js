function messageReceived(text, id, channel) {
  document.getElementById('messages').innerHTML +=
    id + ': ' + text + '<br>';
}

var pushstream = new PushStream({
  host: 'localhost',
  port: 8080,
  modes: 'websocket',
  channelsByArgument: true,
  channelsArgument: 'channels',
});

pushstream.onmessage = messageReceived;
pushstream.addChannel('ch1');
pushstream.connect();

// Enviar mensagem
var messageForm = document.getElementById('send-message');

messageForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var message = document.getElementById('the-message');
  var formData = new FormData();

  formData.append('message', message);

  try {
    fetch('http://localhost:8080/pub?id=ch1', { method: 'POST', body: message.value })
      .then(async function (res) {
        var contentType = res.headers.get("content-type");

        if (contentType && contentType.indexOf("application/json") !== -1) {
          const json = await res.json();
          console.log(json);
        }
      })
  } catch (error) {
    console.error(error)
  }
})
