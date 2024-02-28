import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHomeAlt,
  faCircleInfo,
  faUserAstronaut,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <nav className={`navbar --hue_theme-${props.theme}`}>
        <span className='left-nav flex'>
          {menuOpen ? (
            <NavbarMenu closeMenu={toggleMenu} setTheme={props.changeTheme} />
          ) : (
            <button
              className={`menuToggle flex hover__color-darken ${
                menuOpen ? "menu__open" : "menu__closed"
              }`}
              onClick={toggleMenu}
            >
              <span className='menuButtonLine --i:1'></span>
              <span className='menuButtonLine --i:2'></span>
              <span className='menuButtonLine --i:3'></span>
            </button>
          )}
        </span>
        <span className='right-nav flex'>
          <a
            htmlFor='gitProjects'
            className='icon git hover__color-darken'
            target='__blank'
            rel='noopener noreferrer'
            href='https://github.com/cmlowerence?tab=repositories'>
            More Projects...&nbsp;&nbsp;
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
      </nav>
    </>
  );
}
function NavbarMenu(props) {
  const handleThemeChange = (newTheme) => {
    props.setTheme(newTheme);
    props.closeMenu();
  };
  return (
      <nav className='navMenu'>
        <button
          className='closeMenuBtn hover__color-darken'
          onClick={props.closeMenu}
        >
          <span className='menuButtonLine --i:1'></span>
          <span className='menuButtonLine --i:2'></span>
        </button>
        <div className='menuContent'>
          <ul>
            <li tabIndex={0}>
              <a href={`/`}>
                <FontAwesomeIcon icon={faHomeAlt} />
                <span className='menuItem'>Home</span>
              </a>
            </li>
            <li tabIndex={0}>
              <a href={`/about`}>
                <FontAwesomeIcon icon={faCircleInfo} />
                <span className='menuItem'>About</span>
              </a>
            </li>
            <li tabIndex={0}>
              <a href={`/contact`}>
                <FontAwesomeIcon icon={faPhone} />
                <span className='menuItem'>Contact</span>
              </a>
            </li>
            <li tabIndex={0}>
              <a
                href='https://cmlowerence.netlify.app'
                target='__blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faUserAstronaut} />
                <span className='menuItem'>Portfolio</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='themes'>
          <h2 className='themeTxt'>Themes:</h2>
          <ul className='simpleUL flex themeColors'>
            <li
              id='pink'
              onClick={() => handleThemeChange("pink")}
              tabIndex={0}
            ></li>
            <li
              id='purple'
              onClick={() => handleThemeChange("purple")}
              tabIndex={0}
            ></li>
            <li
              id='green'
              onClick={() => handleThemeChange("green")}
              tabIndex={0}
            ></li>
            <li
              id='blue'
              onClick={() => handleThemeChange("blue")}
              tabIndex={0}
            ></li>
            <li
              id='red'
              onClick={() => handleThemeChange("red")}
              tabIndex={0}
            ></li>
          </ul>
        </div>
      </nav>
  );
}


export default Navbar;
