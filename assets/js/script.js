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

function faqsAccordion() {
    const accordionSections = document.querySelectorAll(".faq__accordion");

    accordionSections.forEach(section => {
        const accordionItemHeaders = section.querySelectorAll(".accordion-item-header");

        if (accordionItemHeaders.length > 0) {
            const firstAccordionItemHeader = accordionItemHeaders[0];
            const firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

            firstAccordionItemHeader.classList.add("active");
            firstAccordionItemBody.style.maxHeight = firstAccordionItemBody.scrollHeight + "px";
        }

        accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener("click", event => {
                const accordionItemBody = accordionItemHeader.nextElementSibling;

                accordionItemHeaders.forEach(item => {
                    if (item !== accordionItemHeader) {
                        item.classList.remove("active");
                        item.nextElementSibling.style.maxHeight = 0;
                    }
                });

                accordionItemHeader.classList.toggle("active");

                if (accordionItemHeader.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                } else {
                    accordionItemBody.style.maxHeight = 0;
                }
            });
        });
    });
}

faqsAccordion();

