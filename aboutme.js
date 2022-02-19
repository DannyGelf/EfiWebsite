const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -140px 0px"

};

const faders = document.querySelectorAll('.before-scroll');
const titleFaders = (document.querySelectorAll('.before-scroll-heading'));
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
titleFaders.forEach(titleFader => {
    appearOnScroll.observe(titleFader);
});