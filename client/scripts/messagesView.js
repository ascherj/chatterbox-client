var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', (event) => {
      var user = $(event.target).text();
      Friends.add(user);
    });
  },

  render: function() {
    MessagesView.$chats.html('');
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
