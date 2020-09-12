'use strict';

var App = function () {
    return {
        setCustomViewportHeight: function setCustomViewportHeight() {
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', vh + 'px');
        },
        setTimeStamps: function setTimeStamps() {
            var footerTimeStamp = document.querySelector('.year-stamp');
            var yearOfExperience = document.querySelector('.main-description #dev-years');
            var date = new Date();
            footerTimeStamp.innerHTML = date.getFullYear();
            yearOfExperience.innerHTML = new Date(date - new Date('2016-07-01')).getFullYear() - 1970;
        },
        init: function init() {
            App.setTimeStamps();
            App.setCustomViewportHeight();
        }
    };
}();

App.init();