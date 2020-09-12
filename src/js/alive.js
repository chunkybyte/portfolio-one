/**
 * Using GSAP 3 to bring "life" to the application
 */
const Alive = (function () {
    return {
        animateMainLogo: (landerTL) => {
            const brandnameEL = document.querySelectorAll('#brand-name');
            const brandSubEl = document.querySelector('#brand-sub-title');
            landerTL
                .from(brandnameEL, {
                    opacity: 0,
                    duration: 1,
                    ease: 'expo',
                    y: 200
                })
                .from(brandSubEl, {
                    opacity: 0,
                    duration: 1.5,
                    ease: 'expo',
                    x: 300
                }, '-=0.2');
        },
        animateJobTitle: (landerTL) => {
            const jobTitle = document.querySelectorAll('.general h2 .line');
            jobTitle.forEach( el => {
                landerTL
                    .from(el, {
                        opacity: 0,
                        duration: 1,
                        ease: 'power4',
                        y: 100
                    }, '-=0.7');
            });
        },
        animateJobSubtitle: (landerTL) => {
            const jobSubtitle = document.querySelector('.passionate-subtitle p');
            const jobSubtitleHR = document.querySelector('.passionate-subtitle hr');
            landerTL
                .from(jobSubtitleHR, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    x: -100
                })
                .from(jobSubtitle, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    x: -300
                });
        },
        init: () => {
            const landerTL = gsap.timeline();
            Alive.animateMainLogo(landerTL);
            Alive.animateJobTitle(landerTL);
            Alive.animateJobSubtitle(landerTL);
        }
    };
})();

Alive.init();