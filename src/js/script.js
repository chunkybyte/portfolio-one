const App = (function () {
    return {
        setCustomViewportHeight: () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        },
        setTimeStamps: () => {
            const footerTimeStamp = document.querySelector('.year-stamp');
            const yearOfExperience = document.querySelector('.main-description #dev-years');
            const date = new Date();
            footerTimeStamp.innerHTML = date.getFullYear();
            yearOfExperience.innerHTML = new Date(date - new Date('2016-07-01')).getFullYear() - 1970;
        },
        init: () => {
            App.setTimeStamps();
            App.setCustomViewportHeight();
        }
    };
})();

App.init();