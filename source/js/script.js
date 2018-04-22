'use strict';

var toogleMenu = document.querySelector('.toggle-menu');
var navigation = document.querySelector('.navigation');

toogleMenu.addEventListener('click', function() {
  toogleMenu.classList.toggle('toggle-menu--close');
  navigation.classList.toggle('navigation--open');
});
