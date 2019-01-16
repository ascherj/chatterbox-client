var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.click(RoomsView.handleClick);
  },

  render: function() {
    RoomsView.$select.html('');
    Rooms._data.forEach(room => RoomsView.renderRoom(room));
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(room) {
    var $option = $('<option>').val(room).text(room);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function(event) {
    var roomname = prompt('Please enter room name: ');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }

};
