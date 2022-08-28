import lazy from './lazy';
import mmenu from './mmenu';
import '../scss/main.scss';

lazy();
mmenu();

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});