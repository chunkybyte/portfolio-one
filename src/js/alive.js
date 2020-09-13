/**
 * Using GSAP 3 to bring "life" to the application
 */
const Alive = (function () {
    return {
        animateWelcomScreen: (landerTL) => {
            const welcomeEl = document.querySelectorAll('#welcome-screen p span');
            const welcomeScreenEl = document.querySelectorAll('#welcome-screen');

            welcomeEl.forEach( el => {
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
                            this._targets[0].style.display = 'none';
                        }
                    });
            });

            landerTL
                .to(welcomeScreenEl, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    y: 1000
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
                }, '-=1')
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
        handleContactScreen: (landerTL) => {
            const contactscreenBtn = document.querySelector('#contact-screen-btn');
            const contactScreen = document.querySelector('#contact-screen');
            const closeContactScreen = contactScreen.querySelector('.close-btn');
            
            const h2 = contactScreen.querySelector('h2 span');
            const socialTitle = contactScreen.querySelector('.social-title p');
            const socialLinks = contactScreen.querySelectorAll('.social-links li .nav-link');

            landerTL
                .from(contactscreenBtn, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    x: 300
                });

            contactscreenBtn.addEventListener('click', () => {
                let contactTL = gsap.timeline();
                contactTL
                    .fromTo(contactScreen, {
                        ease: 'power4',
                        duration: 3,
                        y: 1000, 
                        onStart: function () {
                            contactScreen.style.display = 'block';
                        }
                    }, {
                        y: 0
                    })
                    .fromTo(h2, {
                        opacity: 0,
                        duration: 1,
                        ease: 'power4',
                        y: 100
                    },{
                        opacity: 1,
                        y: 0
                    })
                    .fromTo(socialTitle, {
                        opacity: 0,
                        duration: 1,
                        ease: 'power4',
                        x: -100
                    }, {
                        opacity: 1,
                        x: 0
                    }, '-=0.8')
                    .fromTo(socialLinks, {
                        opacity: 0,
                        duration: 1,
                        ease: 'power4',
                        y: 100,
                        x: 100,
                        stagger: 0.1
                    }, {
                        opacity: 1,
                        y: 0,
                        x: 0,
                    });
            });

            closeContactScreen.addEventListener('click', () => {
                let contactTL = gsap.timeline();
                
                contactTL
                    .fromTo(h2, {
                        opacity: 1,
                        duration: 1,
                        ease: 'power4',
                        y: 0
                    },{
                        opacity: 0,
                        y: 100
                    })
                    .fromTo(socialTitle, {
                        opacity: 1,
                        duration: 1,
                        ease: 'power4',
                        x: 0
                    }, {
                        opacity: 0,
                        x: -100
                    }, '-=0.2')
                    .fromTo(socialLinks, {
                        opacity: 1,
                        duration: 1,
                        ease: 'power4',
                        y: 0,
                        x: 0
                    }, {
                        opacity: 0,
                        y: 100,
                        x: 100,
                    }, '-=0.8')
                    .fromTo(contactScreen, {
                        duration: 2,
                        ease: 'back',
                        y: 0
                    }, {
                        y: 1000,
                        onComplete: function () {
                            contactScreen.style.display = 'none';
                        }
                    });
            });
        },
        landerInit: () => {
            const landerTL = gsap.timeline();
            Alive.animateWelcomScreen(landerTL);
            Alive.animateBrandLogo(landerTL);
            Alive.animateMainLogo(landerTL);
            Alive.animateJobTitle(landerTL);
            Alive.animateJobSubtitle(landerTL);
            Alive.handleContactScreen(landerTL);
        },
        init: () => {
            Alive.landerInit();
        }
    };
})();

Alive.init();