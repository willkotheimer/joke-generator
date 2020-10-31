const showHomepage = () => {
  $('#app').html('');
  $('#app').append('<p>Welcome to the Jokes!</p>');
  $('#app').append('<div id="Joke"></div>');
  $('#app').append('<button id="jokeButton">Get a joke</button>');
};

export default { showHomepage };
