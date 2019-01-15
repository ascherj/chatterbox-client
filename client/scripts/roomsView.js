var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.click(() => {
      Rooms.add();
    });
  },

  render: function() {
  },

  renderRoom: function(room) {
    var roomButton = $('<button></button>').append(room);
    this.$select.append(roomButton);
  }

};
