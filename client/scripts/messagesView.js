var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    let messages = Messages.get();
    console.log(messages);

    messages.forEach((message) => {
      let renderedMessage = MessageView.render(message);
      console.log(renderedMessage);
      MessagesView.$chats.append(renderedMessage);
    });
  },

};
