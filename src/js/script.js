const App = (function () {
    return {
        setCustomViewportHeight: () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        },
        init: () => {
            App.setCustomViewportHeight();
        }
    };
})();

App.init();