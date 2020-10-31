import card from '../cards/jokeBoardCard';

const viewHelper = (id) => {
  switch (id) {
    case '#':
    case 'jokeButton':
      return card.jokeCard();
    case 'punchLine':
      return card.punchLineCard();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = () => {
  $('body').on('click', '#jokeButton', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '#punchLine', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
