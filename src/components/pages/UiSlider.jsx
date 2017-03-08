import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class UiSlider extends React.Component {

  render() {
    return (

      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Sliders
            <small>range sliders</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">Sliders</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box box-primary">
                <div className="box-header">
                  <h3 className="box-title">Bootstrap Slider</h3>
                </div>

                <div className="box-body">
                  <div className="row margin">

                      <div style={{ width: 400, margin: 50 }}>
                        <p>Slider with custom handle</p>
                        <Slider min={0} max={20} defaultValue={3} />
                      </div>
                      <div style={{ width: 400, margin: 50 }}>
                        <p>Range with custom handle</p>
                        <Range min={0} max={20} defaultValue={[3, 10]} />
                      </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    );
  }
}

export default UiSlider;
