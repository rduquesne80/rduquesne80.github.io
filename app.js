import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

fetch('/tabs/portrait.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('container').innerHTML = text);

  /*
let loadTab = (tabName) => {
    fetch('/tabs/' + tabName + '.html')
        .then(response=> response.text())
        .then(text=> document.getElementById('container').innerHTML = text);
};
*/

document.querySelector('#loadPortraitButton').onclick = () => fetch('/tabs/portrait.html')
.then(response=> response.text())
.then(text=> document.getElementById('container').innerHTML = text);

document.querySelector('#loadTravelsButton').onclick = () => fetch('/tabs/travels.html')
.then(response=> response.text())
.then(text=> document.getElementById('container').innerHTML = text);

document.querySelector('#loadSkillsButton').onclick = () => fetch('/tabs/skills.html')
.then(response=> response.text())
.then(text=> document.getElementById('container').innerHTML = text);

document.querySelector('#loadContactButton').onclick = () => fetch('/tabs/contact.html')
.then(response=> response.text())
.then(text=> document.getElementById('container').innerHTML = text);
