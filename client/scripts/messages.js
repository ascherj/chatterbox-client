var Messages = {

  _storage: [],

  receive: (data) => {
    Messages._storage = Messages.filter(data);
  },

  get: () => {
    return Messages._storage;
  },

  filter: (data) => {
    let regex = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;

    // obtain messages from users
    let userMessages = data.results.filter((message) => message.hasOwnProperty('username'));

    // escape any text with <script> tags
    let filteredUserMessages = userMessages.map((message) => {
      if (regex.test(message.text)) {
        message.text = '';
      }
      return message;
    });

    return filteredUserMessages;
  }

};