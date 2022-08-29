const modal = () => {
    const openButtons = document.querySelectorAll('.js-open-modal');
    const closeButtons = document.querySelectorAll('.js-close-modal');

    openButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            open();
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            close();
        });
    });

    function open() {
        document.body.classList.add('is-modal');
    };

    function close() {
        document.body.classList.remove('is-modal');
    }
};

export default modal;