import React from 'react';

class HomePage extends React.Component {
  componentDidMount() {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0];
    let content = document.getElementsByClassName("content-wrapper");
    content[0].style.height = ((w.innerHeight|| e.clientHeight|| g.clientHeight)-101)+'px';
  }
  render() {
    return (

        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Dashboard
              <small>Control panel</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
              <li className="active">Dashboard</li>
            </ol>
          </section>
        </div>

    );
  }
}

export default HomePage;
