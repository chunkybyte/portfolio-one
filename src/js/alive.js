/**
 * Using GSAP 3 to bring "life" to the application
 */
const Alive = (function () {
    return {
        animateWelcomScreen: (landerTL) => {
            const welcomeEl = document.querySelectorAll('#welcome-screen p span');

            welcomeEl.forEach( (el, i) => {
                let args = {
                    delayFrom: 0,
                    delayTo: 0
                }

                landerTL
                    .from(el, {
                        delay: args.delayFrom,
                        opacity: 1,
                        duration: 2,
                        ease: 'power4',
                        y: 200
                    })
                    .to(el, {
                        opacity: 0,
                        duration: 2,
                        ease: 'power4',
                        y: -100,
                        onComplete: function () {
                            console.log(this._targets[0]);
                            this._targets[0].style.display = 'none';
                        }
                    });
            });

        },
        animateBrandLogo: (landerTL) => {
            const brandnameEL = document.querySelector('.image-logo');
            const footerYear = document.querySelector('.year-stamp');
            landerTL
                .from(brandnameEL, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    y: -200
                }, '-=1.5')
                .from(footerYear, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    y: 200
                }, '-=2');
        },
        animateMainLogo: (landerTL) => {
            const hiMsgEl = document.querySelector('.hi-message p');
            const brandnameEL = document.querySelectorAll('#brand-name');
            const brandSubEl = document.querySelector('#brand-sub-title');
            landerTL
                .from(hiMsgEl, {
                    opacity: 0,
                    duration: 1,
                    ease: 'expo',
                    y: 200
                }, '-=0.8')
                .from(brandnameEL, {
                    delay: 1,
                    opacity: 0,
                    duration: 1,
                    ease: 'expo',
                    y: 200
                }, '-=0.8')
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
            const jobSubtitle = document.querySelector('.passionate-subtitle p span');
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
            Alive.animateWelcomScreen(landerTL);
            Alive.animateBrandLogo(landerTL);
            Alive.animateMainLogo(landerTL);
            Alive.animateJobTitle(landerTL);
            Alive.animateJobSubtitle(landerTL);
        }
    };
})();

Alive.init();