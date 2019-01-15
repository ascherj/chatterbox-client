var Messages = {

  _storage: [],

  receive: (data) => {
    Messages._storage = data.results.filter((message) => message.hasOwnProperty('username'));
  },

  get: () => {
    return Messages._storage;
  }

};