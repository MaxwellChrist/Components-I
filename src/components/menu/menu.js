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

const header = document.querySelector(".header");

function menuMaker(x) {
  const menu = document.createElement("div");
  const unordered = document.createElement("ul");
  menu.appendChild(unordered);
  menu.classList.add("menu");

////////////////////////////////////////////////////////////////////// #2
// Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
// Add those items to the <ul>

  for(let i=0; i<x.length; i++) {
    const listI = document.createElement("li");
    listI.textContent = x[i];
    unordered.appendChild(listI);
  };

////////////////////////////////////////////////////////////////////// #3
// Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  const button = document.querySelector(".menu-button");

////////////////////////////////////////////////////////////////////// #4
// Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  button.addEventListener("click", (e) => {
    // console.log(e.target);
    menu.classList.toggle("menu--open");
  })

  // console.log(menu);

////////////////////////////////////////////////////////////////////// #5
// Step 5: Don't forget to return your div.menu.
  return menu;
}

// console.log(menuMaker(menuItems));

////////////////////////////////////////////////////////////////////// #6
// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

const menuElements = menuMaker(menuItems);

// console.log(menuElements);

header.appendChild(menuElements);