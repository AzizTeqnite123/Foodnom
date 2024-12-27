AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabs-blog');
    const contents = document.querySelectorAll('.tab-blog-content'); // Changed to the correct selector

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab-prod');

            // Deactivate all tabs and hide all content
            tabs.forEach(t => t.classList.remove('active-tab'));
            contents.forEach(c => c.classList.remove('active-content'));

            // Activate the clicked tab and corresponding content
            this.classList.add('active-tab');
            document.querySelector(`.tab-blog-content.${targetTab}`).classList.add('active-content'); // Correct the selector
        });
    });
});
