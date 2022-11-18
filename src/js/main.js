document.documentElement.classList.add('js-enabled');
(() => {
    const nightDay = {
        toggleContainer: document.querySelector('div.tumbler__wrapper'),
        posts: document.getElementsByTagName('post'),
        toggle: document.querySelector('div.tumbler'),
        init() {
            this.toggleContainer.addEventListener('click', () => {
                document.body.classList.toggle('body--night-mode');
                this.toggle.classList.toggle('tumbler--night-mode');
                for (const post of this.posts) {
                    post.classList.toggle('post--night-mode');
                }
            });
        }
    }
    nightDay.init();
})()

