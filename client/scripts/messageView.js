var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">
          <%= username %>
        </div>
        <div>
          <%= text %>
        </div>
      </div>
    `)

};

/*
var compiled = _.template(
  "<div class='module module-movie' style='background-image: url(<%= movieImage %>)'>" +
    "<div class='movie-info'>" +
      "<h3 class='movie-title'>" +
         "<%= movieTitle %>" +
      "</h3>" +
      "<p class='movie-director'>" +
         "<%= movieDirector %>" +
      "</p>" +
    "</div>" +
  "</div>"
);

var i, html = "";
for (i = 0; i < data.movies.length; i++) {
  html += compiled(data.movies[i]);
}
$("#movies").append(html);

{
  movieImage: '/saefdsf/asdfk.jpg',
  movieTitle: 'Superman',
  movieDirector: 'Something else';
}

*/