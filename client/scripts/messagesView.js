var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    var messages = Messages.get();
    messages.forEach((message) => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    var newMessageDiv = MessageView.render(message);
    this.$chats.append(newMessageDiv);

    $('.username').click((event) => {
      Friends.toggleStatus();
    });
  }

};
