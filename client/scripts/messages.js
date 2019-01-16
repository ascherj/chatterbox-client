var Messages = {

  _storage: [],

  get: () => {
    return Messages._storage;
  },

  add: function(message) {
    Messages._storage.push(Messages._filter(message));
  },

  update: function(messages, callback = ()=>{} ) {
    messages.forEach((message) => {
      Messages._storage.push(Messages._filter(message));
    });

    callback();
  },

  _filter: function(message) {
    let regex = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;

    message.username = (regex.test(message.username)) ? '' : message.username;
    message.text = (regex.test(message.text)) ? '' : message.text;
    message.roomname = (regex.test(message.roomname)) ? '' : message.roomname;

    return message;
  }

};