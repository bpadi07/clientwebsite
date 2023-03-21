import { menuItems, loginMenuItems, notLoginMenuItems } from '../menuItems';
import MenuItems from './MenuItems';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const user = false;
  const menus = user ? [...menuItems, ...loginMenuItems] : [...menuItems, ...notLoginMenuItems];
  useEffect(() => {
    // find the collection of elements with the class name 'my-text'
    const collection = document.getElementsByClassName('menu-items');

    // turn the collection into an array
    const myElements = Array.from(collection);
    myElements.forEach((element) => {
      // element.style.backgroundColor = 'red';

      element.addEventListener('click', (e) => {
        myElements.forEach((element) => {
          element.classList.remove("active_menu");
        })
        element.classList.add("active_menu");

      });
    });


  }, []);

  return (
    <nav className="navs">
      <ul className="menus">
        {menus.map((menu, index) => {
          const depthLevel = 0;
          return (

            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
        <li className="menu-items" >
          <button>
            {user ?
               <Link to="logout">Logout</Link>:<Link to="login">Login</Link>              
            }
          </button>
        </li>
      </ul>
    </nav>
  );
};

// console.log(document.querySelectorAll(".menu-items")[0])
// let dropdown = document.querySelectorAll(".menu-items");
// dropdown.forEach(item => {   
//   item.addEventListener('click', (e) => {
//     console.log(item)     

//   });

// })

export default Navbar;
