import React from 'react';
import {hasClass, addClass, removeClass} from 'constants/checkClass';

class Header extends React.Component {
  toggleHeader() {
    let currentDom = document.getElementById("bodyApp");
    if (hasClass(currentDom, 'sidebar-collapse')) {
      removeClass(currentDom, 'sidebar-collapse');
    } else {
      addClass(currentDom, 'sidebar-collapse');
    }
  }
  render() {
    return (
      <header className="main-header">

        <a href="#" className="logo">

          <span className="logo-mini"><b>A</b>LT</span>

          <span className="logo-lg"><b>Admin</b>LTE</span>
        </a>

        <nav className="navbar navbar-static-top">

          <a href="javascript:void(0)" className="sidebar-toggle" onClick={() => this.toggleHeader()} >
            <span className="sr-only">Toggle navigation</span>
          </a>

        </nav>
      </header>
    );
  }
}
export default Header;
