var MessagesView = {

  $chats: $('#chats'),
  $refreshButton: $('<button>Refresh Messages</button>'),

  initialize: function() {
    MessagesView.$chats.on('click', (event) => {
      if (event.target.className === 'username') {
        var user = $(event.target).text();
        Friends.add(user);
      }
    });

    MessagesView.$refreshButton.on('click', MessagesView.render);
  },

  render: function() {
    MessagesView.$chats.html('');
    MessagesView.$chats.append(MessagesView.$refreshButton);

    var messages = Messages.get();
    messages = messages.filter(message => Rooms.isSelected(message.roomname));
    messages.forEach((message) => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(MessageView.render(message));

    // $('.username').click((event) => {
    //   Friends.toggleStatus();
    // });
  }

};
