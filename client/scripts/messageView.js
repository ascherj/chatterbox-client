var MessageView = {

  render: function(message) {
    var chatDiv = $('<div class="chat"></div>');
    var userDiv = $('<div class="username"></div>').append(message.username);
    var textDiv = $('<div></div>').append(message.text);
    var roomDiv = $('<div></div>').append(message.roomname);
    chatDiv.append(userDiv, textDiv, roomDiv);
    return chatDiv;
  }

};
