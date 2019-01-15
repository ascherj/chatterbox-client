var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {

  },

  renderMessage: function(message) {
    var newMessageDiv = MessageView.render(message);
    this.$chats.append(newMessageDiv);

    $('.username').click((event) => {
      Friends.toggleStatus();
    });
  }

};
