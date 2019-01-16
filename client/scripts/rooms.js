var Rooms = {

  _storage: [],

  selected: 'lobby',


  add: function(room, callback = () => {}) {
    if (!Rooms._storage.includes(room)) {
      Rooms._storage.push(room);
    }
    Rooms.selected = room;
    callback();
  },

  update: function(messages, callback = () => {}) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._storage.push(room));

    callback();
  },

  isSelected: function(roomname) {
    return Rooms.selected === roomname;
  }

};