import React from 'react';
import Header from 'layout/partials/Header.jsx';
import Footer from 'layout/partials/Footer.jsx';
import Sidebar from 'layout/partials/Sidebar.jsx';

class MasterLayout extends React.Component {
  componentDidMount() {
    document.getElementById("bodyApp").className = "skin-blue sidebar-mini";
  }
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Sidebar router = {this.props.location.pathname}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default MasterLayout;
