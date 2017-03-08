import React from 'react';
import {Link} from 'react-router';
import {hasClass, addClass, removeClass} from 'constants/checkClass';

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  toggleMenu(e) {
    let currentDom = e.currentTarget.parentElement;
    if (hasClass(currentDom, 'active')) {
      removeClass(currentDom, 'active');
    } else {
      let parentDom = document.getElementsByClassName('sidebar-menu')[0].children;
      for (let i = 0; i < parentDom.length; i++) {
        if (hasClass(parentDom[i], 'active')) {
          removeClass(parentDom[i], 'active');
        }
      }
      addClass(currentDom, 'active');
    }
  }

  render() {
    return (
      <aside className="main-sidebar">

        <section className="sidebar">


          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            <li className={this.props.router === '/' ? 'active' : ''}>
              <Link to="/" onClick={(e)=>this.toggleMenu(e)}>
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              </Link>
            </li>
            <li className="treeview" className={this.props.router.indexOf('ui') !== -1 ? 'active' : ''}>
              <a href="#" onClick={(e)=>this.toggleMenu(e)}>
                <i className="fa fa-laptop"></i>
                <span>UI Elements</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li className={this.props.router === '/ui' ? 'active' : ''}>
                  <Link to="/ui">
                    <i className="fa fa-circle-o"></i> General
                  </Link>
                </li>
                <li className={this.props.router === '/ui-icon' ? 'active' : ''}>
                  <Link to="/ui-icon">
                    <i className="fa fa-circle-o"></i> Icons
                  </Link>
                </li>
                <li className={this.props.router === '/ui-button' ? 'active' : ''}>
                  <Link to="/ui-button">
                    <i className="fa fa-circle-o"></i> Buttons
                  </Link>
                </li>
                <li className={this.props.router === '/ui-slider' ? 'active' : ''}>
                  <Link to="/ui-slider">
                    <i className="fa fa-circle-o"></i> Sliders
                  </Link>
                </li>
                <li className={this.props.router === '/ui-modal' ? 'active' : ''}>
                  <Link to="/ui-modal">
                    <i className="fa fa-circle-o"></i> Modals
                  </Link>
                </li>
              </ul>
            </li>
            <li className="treeview" className={this.props.router.indexOf('form') !== -1 ? 'active' : ''}>
              <a href="#" onClick={(e)=>this.toggleMenu(e)}>
                <i className="fa fa-edit"></i> <span>Forms</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li className={this.props.router === '/form' ? 'active' : ''}>
                  <Link to="/form">
                    <i className="fa fa-circle-o"></i> General Elements
                  </Link>
                </li>
                <li className={this.props.router === '/form-advance' ? 'active': ''}>
                  <Link to="/form-advance">
                    <i className="fa fa-circle-o"></i> Advanced Elements
                  </Link>
                </li>
                <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#" onClick={(e)=>this.toggleMenu(e)}>
                <i className="fa fa-table"></i> <span>Tables</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#" onClick={(e)=>this.toggleMenu(e)}>
                <i className="fa fa-folder"></i> <span>Examples</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="/login"><i className="fa fa-circle-o"></i> Login</a></li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}
export default Sidebar;
