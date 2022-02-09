import './Menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

////////////////////////////////////////////////////////////////////// #1
// Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
//   <div class="menu">
//     <ul>
//       {each menu item as an <li>}
//     </ul>
//   </div>
//   The 'menuMaker' takes an array of menu items as its only argument.

// menuItems.forEach(function(e) {
//   let number = e.index;
//   console.log(e);
//   console.log(number);
// })


function menuMaker(x) {
  const menu = document.createElement("div");
  const unordered = document.createElement("ul");
  const listI = document.createElement("li");

  // for(let i=0; i<=x.length; i++) {
  //   let new = document.createElement("li");
  //   new.textContent = x[i];
  // }

  //   x.forEach(function(e) {
  //   console.log(e);
  // })


  //   x.forEach(function(e) {
  //   listI.textContent += e;
  //   console.log(listI);
  // })

  menu.appendChild(unordered);
  unordered.appendChild(listI);

  menu.classList.add("menu");

  return menu;
}

console.log(menuMaker(menuItems));