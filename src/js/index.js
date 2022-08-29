import lazy from './lazy';
import mmenu from './mmenu';
import modal from './modal';
import '../scss/main.scss';

lazy();
mmenu();
modal();

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});