const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);

const tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

let setActiveTab = (tabButton) => {
    tabButton.addClass('mdc-tab--active');
};
const buttonsTab = document.getElementsByClassName('.mdc-tab');
console.log(buttonsTab);
buttonsTab.forEach(button => {
    button.addEventListener("click", (event) => {
        buttonsTab.forEach(but => but.removeClass('mdc-tab--active'));
        setActiveTab(button);
    });
});
