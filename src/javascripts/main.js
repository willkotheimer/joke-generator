import '../styles/main.scss';
import home from './views/homeView';
import view from './helpers/viewHelper';

const init = () => {
  home.showHomepage();
  view.viewListener();
};

init();
