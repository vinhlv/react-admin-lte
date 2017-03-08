import React from 'react';

class SingleLayout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default SingleLayout;
