var Friends = {

  _storage: [],

  toggleStatus: function() {

  },

  add: function(friend) {
    if (!Friends._storage.includes(friend)) {
      Friends._storage.push(friend);
    }
    console.log('my friends:', Friends._storage);
  }

};