'use strict';

/**
 * Using GSAP 3 to bring "life" to the application
 */
var Alive = function () {
    return {
        animateBrandLogo: function animateBrandLogo(landerTL) {
            var brandnameEL = document.querySelectorAll('.image-logo');
            landerTL.from(brandnameEL, {
                opacity: 0,
                duration: 1,
                ease: 'power4',
                y: -200
            });
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
        init: function init() {
            var landerTL = gsap.timeline();
            Alive.animateBrandLogo(landerTL);
            Alive.animateMainLogo(landerTL);
            Alive.animateJobTitle(landerTL);
            Alive.animateJobSubtitle(landerTL);
        }
    };
}();

Alive.init();