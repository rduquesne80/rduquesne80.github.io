const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = mdc.MDCTopAppBar.attachTo(topAppBarElement);

const tabBar = mdc.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));

let setActiveTab = (tabButton) => {
    tabButton.addClass('mdc-tab--active');
};
const buttonsTab = document.querySelector('.mdc-tab');
buttonsTab.forEach(button => {
    button.addEventListener("click", (event) => {
        buttonsTab.forEach(but => but.removeClass('mdc-tab--active'));
        setActiveTab(button);
    });
});
