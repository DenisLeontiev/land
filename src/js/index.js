import lazy from './lazy';
import '../scss/main.scss';

lazy();

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});