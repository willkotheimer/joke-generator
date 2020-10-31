import someData from '../helpers/data/jokeData';

const jokeCard = () => {
  console.warn('anything');
  someData.getJoke()
    .then((response) => {
      console.warn(response.setup);
      $('#Joke').append(`<div class='jokes'>${response.setup}</div>
      <button id='punchLine'>Click for punchline</button>`);
    });
};

const punchLineCard = () => {
  console.warn('anything');
  someData.getJoke()
    .then((response) => {
      console.warn(response.setup);
      $('#Joke').append(`<div class='jokes'>${response.punchline}</div>`);
    });
};

export default { jokeCard, punchLineCard };
