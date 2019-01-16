var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {
    var messages = Messages.get();
    messages.forEach((message) => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(MessageView.render(message));

    // $('.username').click((event) => {
    //   Friends.toggleStatus();
    // });
  }

};
