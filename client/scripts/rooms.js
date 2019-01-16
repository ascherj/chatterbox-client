var Rooms = {

  _data: [],

  selected: 'lobby',


  add: function(room, callback = () => {}) {
    Rooms._data.push(room);
    Rooms.selected = room;
    callback();
  },

  update: function(messages, callback = () => {}) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.push(room));

    callback();
  },

  isSelected: function(roomname) {
    return Rooms.selected === roomname;
  }

};