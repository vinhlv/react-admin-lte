import React from 'react';

class Form extends React.Component {

  render() {
    return (

      <div className="content-wrapper">

        <section className="content-header">
          <h1>
            General Form Elements
            <small>Preview</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Forms</a></li>
            <li className="active">General Elements</li>
          </ol>
        </section>


        <section className="content">
          <div className="row">

            <div className="col-md-6">

              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Quick Example</h3>
                </div>

                <form role="form">
                  <div className="box-body">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputFile">File input</label>
                      <input type="file" id="exampleInputFile"/>

                      <p className="help-block">Example block-level help text here.</p>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"/> Check me out
                      </label>
                    </div>
                  </div>


                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>

              <div className="box box-success">
                <div className="box-header with-border">
                  <h3 className="box-title">Different Height</h3>
                </div>
                <div className="box-body">
                  <input className="form-control input-lg" type="text" placeholder=".input-lg"/>
                  <br/>
                  <input className="form-control" type="text" placeholder="Default input"/>
                  <br/>
                  <input className="form-control input-sm" type="text" placeholder=".input-sm"/>
                </div>

              </div>


              <div className="box box-danger">
                <div className="box-header with-border">
                  <h3 className="box-title">Different Width</h3>
                </div>
                <div className="box-body">
                  <div className="row">
                    <div className="col-xs-3">
                      <input type="text" className="form-control" placeholder=".col-xs-3"/>
                    </div>
                    <div className="col-xs-4">
                      <input type="text" className="form-control" placeholder=".col-xs-4"/>
                    </div>
                    <div className="col-xs-5">
                      <input type="text" className="form-control" placeholder=".col-xs-5"/>
                    </div>
                  </div>
                </div>

              </div>



              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Input Addon</h3>
                </div>
                <div className="box-body">
                  <div className="input-group">
                    <span className="input-group-addon">@</span>
                    <input type="text" className="form-control" placeholder="Username"/>
                  </div>
                  <br/>

                  <div className="input-group">
                    <input type="text" className="form-control"/>
                    <span className="input-group-addon">.00</span>
                  </div>
                  <br/>

                  <div className="input-group">
                    <span className="input-group-addon">$</span>
                    <input type="text" className="form-control"/>
                    <span className="input-group-addon">.00</span>
                  </div>

                  <h4>With icons</h4>

                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                    <input type="email" className="form-control" placeholder="Email"/>
                  </div>
                  <br/>

                  <div className="input-group">
                    <input type="text" className="form-control"/>
                    <span className="input-group-addon"><i className="fa fa-check"></i></span>
                  </div>
                  <br/>

                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-dollar"></i></span>
                    <input type="text" className="form-control"/>
                    <span className="input-group-addon"><i className="fa fa-ambulance"></i></span>
                  </div>

                  <h4>With checkbox and radio inputs</h4>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-group">
                            <span className="input-group-addon">
                              <input type="checkbox"/>
                            </span>
                        <input type="text" className="form-control"/>
                      </div>

                    </div>

                    <div className="col-lg-6">
                      <div className="input-group">
                            <span className="input-group-addon">
                              <input type="radio"/>
                            </span>
                        <input type="text" className="form-control"/>
                      </div>

                    </div>

                  </div>


                  <h4>With buttons</h4>

                  <p className="margin">Large: <code>.input-group.input-group-lg</code></p>

                  <div className="input-group input-group-lg">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">Action
                        <span className="fa fa-caret-down"></span></button>
                      <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>

                    <input type="text" className="form-control"/>
                  </div>

                  <p className="margin">Normal</p>

                  <div className="input-group">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-danger">Action</button>
                    </div>

                    <input type="text" className="form-control"/>
                  </div>

                  <p className="margin">Small <code>.input-group.input-group-sm</code></p>

                  <div className="input-group input-group-sm">
                    <input type="text" className="form-control"/>
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-info btn-flat">Go!</button>
                        </span>
                  </div>

                </div>

              </div>


            </div>

            <div className="col-md-6">

              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Horizontal Form</h3>
                </div>

                <form className="form-horizontal">
                  <div className="box-body">
                    <div className="form-group">
                      <label for="inputEmail3" className="col-sm-2 control-label">Email</label>

                      <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputPassword3" className="col-sm-2 control-label">Password</label>

                      <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox"/> Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="box-footer">
                    <button type="submit" className="btn btn-default">Cancel</button>
                    <button type="submit" className="btn btn-info pull-right">Sign in</button>
                  </div>

                </form>
              </div>

              <div className="box box-warning">
                <div className="box-header with-border">
                  <h3 className="box-title">General Elements</h3>
                </div>

                <div className="box-body">
                  <form role="form">

                    <div className="form-group">
                      <label>Text</label>
                      <input type="text" className="form-control" placeholder="Enter ..."/>
                    </div>
                    <div className="form-group">
                      <label>Text Disabled</label>
                      <input type="text" className="form-control" placeholder="Enter ..." disabled/>
                    </div>


                    <div className="form-group">
                      <label>Textarea</label>
                      <textarea className="form-control" rows="3" placeholder="Enter ..."></textarea>
                    </div>
                    <div className="form-group">
                      <label>Textarea Disabled</label>
                      <textarea className="form-control" rows="3" placeholder="Enter ..." disabled></textarea>
                    </div>


                    <div className="form-group has-success">
                      <label className="control-label" for="inputSuccess"><i className="fa fa-check"></i> Input with success</label>
                      <input type="text" className="form-control" id="inputSuccess" placeholder="Enter ..."/>
                      <span className="help-block">Help block with success</span>
                    </div>
                    <div className="form-group has-warning">
                      <label className="control-label" for="inputWarning"><i className="fa fa-bell-o"></i> Input with
                        warning</label>
                      <input type="text" className="form-control" id="inputWarning" placeholder="Enter ..."/>
                      <span className="help-block">Help block with warning</span>
                    </div>
                    <div className="form-group has-error">
                      <label className="control-label" for="inputError"><i className="fa fa-times-circle-o"></i> Input with
                        error</label>
                      <input type="text" className="form-control" id="inputError" placeholder="Enter ..."/>
                      <span className="help-block">Help block with error</span>
                    </div>


                    <div className="form-group">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox"/>
                          Checkbox 1
                        </label>
                      </div>

                      <div className="checkbox">
                        <label>
                          <input type="checkbox"/>
                          Checkbox 2
                        </label>
                      </div>

                      <div className="checkbox">
                        <label>
                          <input type="checkbox" disabled/>
                          Checkbox disabled
                        </label>
                      </div>
                    </div>


                    <div className="form-group">
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                          Option one is this and that&mdash;be sure to include why it's great
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                          Option two can be something else and selecting it will deselect option one
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled/>
                          Option three is disabled
                        </label>
                      </div>
                    </div>


                    <div className="form-group">
                      <label>Select</label>
                      <select className="form-control">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Select Disabled</label>
                      <select className="form-control" disabled>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>


                    <div className="form-group">
                      <label>Select Multiple</label>
                      <select multiple className="form-control">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Select Multiple Disabled</label>
                      <select multiple className="form-control" disabled>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>

                  </form>
                </div>

              </div>

            </div>

          </div>

        </section>


      </div>

    );
  }
}

export default Form;
