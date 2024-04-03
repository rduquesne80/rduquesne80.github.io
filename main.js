const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);

const tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

fetch('portrait.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('container').innerHTML = text);

let loadTab = (tabName) => {
    fetch(tabName + '.html')
        .then(response=> response.text())
        .then(text=> document.getElementById('container').innerHTML = text);
};