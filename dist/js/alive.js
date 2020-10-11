'use strict';

/**
 * Using GSAP 3 to bring "life" to the application
 */
var Alive = function () {
    return {
        animateWelcomScreen: function animateWelcomScreen(landerTL) {
            var welcomeEl = document.querySelectorAll('#welcome-screen p span');
            var welcomeScreenEl = document.querySelectorAll('#welcome-screen');

            welcomeEl.forEach(function (el) {
                var args = {
                    delayFrom: 0,
                    delayTo: 0
                };

                landerTL.from(el, {
                    delay: args.delayFrom,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power4',
                    y: 200
                }).to(el, {
                    opacity: 0,
                    y: -100,
                    onComplete: function onComplete() {
                        this._targets[0].style.display = 'none';
                    }
                });
            });

            landerTL.to(welcomeScreenEl, {
                opacity: 0,
                duration: 1,
                ease: 'power4',
                y: 1000
            });
        },
        animateBrandLogo: function animateBrandLogo(landerTL) {
            var brandnameEL = document.querySelector('.image-logo');
            var footerYear = document.querySelector('.year-stamp');
            landerTL.from(brandnameEL, {
                opacity: 0,
                duration: 1,
                ease: 'power4',
                y: -200
            }, '-=1').from(footerYear, {
                opacity: 0,
                duration: 1,
                ease: 'power4',
                y: 200
            }, '-=2');
        },
        animateMainLogo: function animateMainLogo(landerTL) {
            var hiMsgEl = document.querySelector('.hi-message p');
            var brandnameEL = document.querySelectorAll('#brand-name');
            var brandSubEl = document.querySelector('#brand-sub-title');
            landerTL.from(hiMsgEl, {
                opacity: 0,
                duration: 1,
                ease: 'expo',
                y: 200
            }, '-=0.8').from(brandnameEL, {
                delay: 1,
                opacity: 0,
                duration: 1,
                ease: 'expo',
                y: 200
            }, '-=0.8').from(brandSubEl, {
                opacity: 0,
                duration: 1.5,
                ease: 'expo',
                x: 300
            }, '-=0.2');
        },
        animateJobTitle: function animateJobTitle(landerTL) {
            var jobTitle = document.querySelectorAll('.general h2 .line');
            jobTitle.forEach(function (el) {
                landerTL.from(el, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    y: 100
                }, '-=0.7');
            });
        },
        animateJobSubtitle: function animateJobSubtitle(landerTL) {
            var jobSubtitle = document.querySelector('.passionate-subtitle p span');
            var jobSubtitleHR = document.querySelector('.passionate-subtitle hr');
            landerTL.from(jobSubtitleHR, {
                opacity: 0,
                duration: 1,
                ease: 'power4',
                x: -100
            }).from(jobSubtitle, {
                opacity: 0,
                duration: 1,
                ease: 'power4',
                x: -300
            });
        },
        handleContactScreen: function handleContactScreen(landerTL) {
            var contactscreenBtn = document.querySelector('#contact-screen-btn');
            var contactScreen = document.querySelector('#contact-screen');
            var closeContactScreen = contactScreen.querySelector('.close-btn');

            var h2 = contactScreen.querySelector('h2 span');
            var socialTitle = contactScreen.querySelector('.social-title p');
            var socialLinks = contactScreen.querySelectorAll('.social-links li .nav-link');

            landerTL.from(contactscreenBtn, {
                opacity: 0,
                duration: 1,
                ease: 'power4',
                x: 300
            });

            contactscreenBtn.addEventListener('click', function () {
                var contactTL = gsap.timeline();
                contactTL.fromTo(contactScreen, {
                    ease: 'power4',
                    duration: 3,
                    y: 1000,
                    onStart: function onStart() {
                        contactScreen.style.display = 'block';
                    }
                }, {
                    y: 0
                }).fromTo(h2, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    y: 100
                }, {
                    opacity: 1,
                    y: 0
                }).fromTo(socialTitle, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    x: -100
                }, {
                    opacity: 1,
                    x: 0
                }, '-=0.8').fromTo(socialLinks, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power4',
                    y: 100,
                    x: 100,
                    stagger: 0.1
                }, {
                    opacity: 1,
                    y: 0,
                    x: 0
                });
            });

            closeContactScreen.addEventListener('click', function () {
                var contactTL = gsap.timeline();

                contactTL.fromTo(h2, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power4',
                    y: 0
                }, {
                    opacity: 0,
                    y: 100
                }).fromTo(socialTitle, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power4',
                    x: 0
                }, {
                    opacity: 0,
                    x: -100
                }, '-=0.2').fromTo(socialLinks, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power4',
                    y: 0,
                    x: 0
                }, {
                    opacity: 0,
                    y: 100,
                    x: 100
                }, '-=0.8').fromTo(contactScreen, {
                    duration: 2,
                    ease: 'back',
                    y: 0
                }, {
                    y: 1000,
                    onComplete: function onComplete() {
                        contactScreen.style.display = 'none';
                    }
                });
            });
        },
        handleBlogScreen: function handleBlogScreen(landerTL) {
            var blogScreenBtn = document.querySelector('#blogs-screen-btn');
            var blogsScreen = document.querySelector('#blogs-screen');
            var closeBlogScreen = blogsScreen.querySelector('.close-btn');

            var h2 = blogsScreen.querySelector('h2 span');
            var socialTitle = blogsScreen.querySelector('.social-title p');
            var socialLinks = blogsScreen.querySelectorAll('.social-links li .nav-link');

            landerTL.from(blogScreenBtn, {
                opacity: 0,
                duration: 1,
                ease: 'power4',
                x: 300
            });

            // blogScreenBtn.addEventListener('click', () => {
            //     let contactTL = gsap.timeline();
            //     contactTL
            //         .fromTo(blogsScreen, {
            //             ease: 'power4',
            //             duration: 3,
            //             y: 1000, 
            //             onStart: function () {
            //                 blogsScreen.style.display = 'block';
            //             }
            //         }, {
            //             y: 0
            //         })
            //         .fromTo(h2, {
            //             opacity: 0,
            //             duration: 1,
            //             ease: 'power4',
            //             y: 100
            //         },{
            //             opacity: 1,
            //             y: 0
            //         })
            //         .fromTo(socialTitle, {
            //             opacity: 0,
            //             duration: 1,
            //             ease: 'power4',
            //             x: -100
            //         }, {
            //             opacity: 1,
            //             x: 0
            //         }, '-=0.8')
            //         .fromTo(socialLinks, {
            //             opacity: 0,
            //             duration: 1,
            //             ease: 'power4',
            //             y: 100,
            //             x: 100,
            //             stagger: 0.1
            //         }, {
            //             opacity: 1,
            //             y: 0,
            //             x: 0,
            //         });
            // });

            closeBlogScreen.addEventListener('click', function () {
                var contactTL = gsap.timeline();

                contactTL.fromTo(h2, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power4',
                    y: 0
                }, {
                    opacity: 0,
                    y: 100
                }).fromTo(socialTitle, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power4',
                    x: 0
                }, {
                    opacity: 0,
                    x: -100
                }, '-=0.2').fromTo(socialLinks, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power4',
                    y: 0,
                    x: 0
                }, {
                    opacity: 0,
                    y: 100,
                    x: 100
                }, '-=0.8').fromTo(blogsScreen, {
                    duration: 2,
                    ease: 'back',
                    y: 0
                }, {
                    y: 1000,
                    onComplete: function onComplete() {
                        blogsScreen.style.display = 'none';
                    }
                });
            });
        },
        landerInit: function landerInit() {
            var landerTL = gsap.timeline();
            Alive.animateWelcomScreen(landerTL);
            Alive.animateBrandLogo(landerTL);
            Alive.animateMainLogo(landerTL);
            Alive.animateJobTitle(landerTL);
            Alive.animateJobSubtitle(landerTL);
            Alive.handleContactScreen(landerTL);
            Alive.handleBlogScreen(landerTL);
        },
        init: function init() {
            Alive.landerInit();
        }
    };
}();

Alive.init();