const lazy = () => {
    const lazyItems = document.querySelectorAll('.lazy.is-preloader');
    const observer = new IntersectionObserver(
        (entries) => {
            for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];

                if (entry.isIntersecting) {
                    const image = entry.target;
                    const mainImage = image.nextElementSibling;

                    mainImage.setAttribute('src', mainImage.dataset.src);
                    mainImage.onload = () => {

                        setTimeout(() => {
                            mainImage.classList.add('is-load');
                            image.classList.add('is-hide');
                        }, 200);
                    }
                }
            }
        }
    );

    for (let i = 0; i < lazyItems.length; i++) {
        const image = lazyItems[i];

        observer.observe(image);
    }
};

export default lazy;