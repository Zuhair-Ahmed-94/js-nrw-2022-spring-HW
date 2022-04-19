// const menuClicked = (curEl) => {
//     const menuItems = document.getElementsByClassName('menu-item');

//     for (let i = 0; i < menuItems.length; i++) {
//         menuItems[i].classList.remove('active');
//     }

//     curEl.classList.add('active');
// }

// Zuhair : we want the user to input the color .. not the programmer changing it into green

function changeColor() { 
  document.querySelector('.personal_info').style.color = 'green';
}
