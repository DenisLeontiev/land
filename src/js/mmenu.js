const mmenu = () => {
    const openButton = document.querySelector('.js-open-mmenu');
    const closeButtons = document.querySelectorAll('.js-close-mmenu');

    openButton.addEventListener('click', event => {
        event.preventDefault();
        open();
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            close();
        });
    });

    function open() {
        document.body.classList.add('is-mmenu');
    };

    function close() {
        document.body.classList.remove('is-mmenu');
    }
};

export default mmenu;