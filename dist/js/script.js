'use strict';

var App = function () {
    var self = this;
    return {
        setCustomViewportHeight: function setCustomViewportHeight() {
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', vh + 'px');
        },
        init: function init() {
            App.setCustomViewportHeight();
        }
    };
}();

App.init();