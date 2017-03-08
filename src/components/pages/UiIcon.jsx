import React from 'react';

class UiIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tabActived: 1
    }
  }

  toggleTab(key) {
    this.setState({tabActived: key});
  }
  render() {
    return (

      <div className="content-wrapper">

        <section className="content-header">
          <h1>
            Icons
            <small>a set of beautiful icons</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">Icons</li>
          </ol>
        </section>


        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className={this.state.tabActived === 1 ? 'active' : ''}><a href="#" onClick={() => this.toggleTab(1)}>Font Awesome</a></li>
                  <li className={this.state.tabActived === 2 ? 'active' : ''}><a href="#" onClick={() => this.toggleTab(2)}>Glyphicons</a></li>
                </ul>
                <div className="tab-content">

                  <div className={`tab-pane ${this.state.tabActived === 1 ? 'active' : ''}`} id="fa-icons">
                    <section id="new">
                      <h4 className="page-header">66 New Icons in 4.4</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-500px"></i> fa-500px</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-amazon"></i> fa-amazon</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-balance-scale"></i> fa-balance-scale</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-0"></i> fa-battery-0
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-1"></i> fa-battery-1
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-2"></i> fa-battery-2
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-3"></i> fa-battery-3
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-4"></i> fa-battery-4
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-empty"></i> fa-battery-empty</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-full"></i> fa-battery-full</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-half"></i> fa-battery-half</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-quarter"></i> fa-battery-quarter</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-three-quarters"></i>
                          fa-battery-three-quarters
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-black-tie"></i> fa-black-tie</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-check-o"></i> fa-calendar-check-o
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-minus-o"></i> fa-calendar-minus-o
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-plus-o"></i> fa-calendar-plus-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-times-o"></i> fa-calendar-times-o
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-diners-club"></i> fa-cc-diners-club</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-jcb"></i> fa-cc-jcb</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chrome"></i> fa-chrome</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-clone"></i> fa-clone</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-commenting"></i> fa-commenting</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-commenting-o"></i> fa-commenting-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-contao"></i> fa-contao</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-creative-commons"></i> fa-creative-commons
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-expeditedssl"></i> fa-expeditedssl</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-firefox"></i> fa-firefox</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-fonticons"></i> fa-fonticons</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-genderless"></i> fa-genderless</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-get-pocket"></i> fa-get-pocket</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gg"></i> fa-gg</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gg-circle"></i> fa-gg-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-grab-o"></i> fa-hand-grab-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-lizard-o"></i> fa-hand-lizard-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-paper-o"></i> fa-hand-paper-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-peace-o"></i> fa-hand-peace-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-pointer-o"></i> fa-hand-pointer-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-rock-o"></i> fa-hand-rock-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-scissors-o"></i> fa-hand-scissors-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-spock-o"></i> fa-hand-spock-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-stop-o"></i> fa-hand-stop-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass"></i> fa-hourglass</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-1"></i> fa-hourglass-1
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-2"></i> fa-hourglass-2
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-3"></i> fa-hourglass-3
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-end"></i> fa-hourglass-end</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-half"></i> fa-hourglass-half</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-o"></i> fa-hourglass-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-start"></i> fa-hourglass-start</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-houzz"></i> fa-houzz</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-i-cursor"></i> fa-i-cursor</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-industry"></i> fa-industry</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-internet-explorer"></i> fa-internet-explorer
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-map"></i> fa-map</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-map-o"></i> fa-map-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-map-pin"></i> fa-map-pin</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-map-signs"></i> fa-map-signs</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mouse-pointer"></i> fa-mouse-pointer</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-object-group"></i> fa-object-group</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-object-ungroup"></i> fa-object-ungroup</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-odnoklassniki"></i> fa-odnoklassniki</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-odnoklassniki-square"></i>
                          fa-odnoklassniki-square
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-opencart"></i> fa-opencart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-opera"></i> fa-opera</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-optin-monster"></i> fa-optin-monster</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-registered"></i> fa-registered</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-safari"></i> fa-safari</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sticky-note"></i> fa-sticky-note</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sticky-note-o"></i> fa-sticky-note-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-television"></i> fa-television</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-trademark"></i> fa-trademark</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tripadvisor"></i> fa-tripadvisor</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tv"></i> fa-tv
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-vimeo"></i> fa-vimeo</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-wikipedia-w"></i> fa-wikipedia-w</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-y-combinator"></i> fa-y-combinator</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-yc"></i> fa-yc
                          <span className="text-muted">(alias)</span></div>
                      </div>
                    </section>

                    <section id="web-application">
                      <h4 className="page-header">Web Application Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-adjust"></i> fa-adjust</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-anchor"></i> fa-anchor</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-archive"></i> fa-archive</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-area-chart"></i> fa-area-chart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows"></i> fa-arrows</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows-h"></i> fa-arrows-h</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows-v"></i> fa-arrows-v</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-asterisk"></i> fa-asterisk</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-at"></i> fa-at</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-automobile"></i> fa-automobile
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-balance-scale"></i> fa-balance-scale</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ban"></i> fa-ban</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bank"></i> fa-bank <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bar-chart"></i> fa-bar-chart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bar-chart-o"></i> fa-bar-chart-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-barcode"></i> fa-barcode</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bars"></i> fa-bars</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-0"></i> fa-battery-0
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-1"></i> fa-battery-1
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-2"></i> fa-battery-2
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-3"></i> fa-battery-3
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-4"></i> fa-battery-4
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-empty"></i> fa-battery-empty</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-full"></i> fa-battery-full</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-half"></i> fa-battery-half</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-quarter"></i> fa-battery-quarter</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-battery-three-quarters"></i>
                          fa-battery-three-quarters
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bed"></i> fa-bed</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-beer"></i> fa-beer</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bell"></i> fa-bell</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bell-o"></i> fa-bell-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bell-slash"></i> fa-bell-slash</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bell-slash-o"></i> fa-bell-slash-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bicycle"></i> fa-bicycle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-binoculars"></i> fa-binoculars</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-birthday-cake"></i> fa-birthday-cake</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bolt"></i> fa-bolt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bomb"></i> fa-bomb</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-book"></i> fa-book</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bookmark"></i> fa-bookmark</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bookmark-o"></i> fa-bookmark-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-briefcase"></i> fa-briefcase</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bug"></i> fa-bug</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-building"></i> fa-building</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-building-o"></i> fa-building-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bullhorn"></i> fa-bullhorn</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bullseye"></i> fa-bullseye</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bus"></i> fa-bus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cab"></i> fa-cab <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calculator"></i> fa-calculator</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar"></i> fa-calendar</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-check-o"></i> fa-calendar-check-o
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-minus-o"></i> fa-calendar-minus-o
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-o"></i> fa-calendar-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-plus-o"></i> fa-calendar-plus-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-calendar-times-o"></i> fa-calendar-times-o
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-camera"></i> fa-camera</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-camera-retro"></i> fa-camera-retro</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-car"></i> fa-car</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-down"></i>
                          fa-caret-square-o-down
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-left"></i>
                          fa-caret-square-o-left
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-right"></i>
                          fa-caret-square-o-right
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-up"></i> fa-caret-square-o-up
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cart-arrow-down"></i> fa-cart-arrow-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cart-plus"></i> fa-cart-plus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc"></i> fa-cc</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-certificate"></i> fa-certificate</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-check"></i> fa-check</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-check-circle"></i> fa-check-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-check-circle-o"></i> fa-check-circle-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-check-square"></i> fa-check-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-check-square-o"></i> fa-check-square-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-child"></i> fa-child</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-circle"></i> fa-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-circle-o"></i> fa-circle-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-circle-o-notch"></i> fa-circle-o-notch</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-circle-thin"></i> fa-circle-thin</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-clock-o"></i> fa-clock-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-clone"></i> fa-clone</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-close"></i> fa-close <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cloud"></i> fa-cloud</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cloud-download"></i> fa-cloud-download</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cloud-upload"></i> fa-cloud-upload</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-code"></i> fa-code</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-code-fork"></i> fa-code-fork</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-coffee"></i> fa-coffee</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cog"></i> fa-cog</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cogs"></i> fa-cogs</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-comment"></i> fa-comment</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-comment-o"></i> fa-comment-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-commenting"></i> fa-commenting</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-commenting-o"></i> fa-commenting-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-comments"></i> fa-comments</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-comments-o"></i> fa-comments-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-compass"></i> fa-compass</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-copyright"></i> fa-copyright</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-creative-commons"></i> fa-creative-commons
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-credit-card"></i> fa-credit-card</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-crop"></i> fa-crop</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-crosshairs"></i> fa-crosshairs</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cube"></i> fa-cube</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cubes"></i> fa-cubes</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cutlery"></i> fa-cutlery</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-dashboard"></i> fa-dashboard
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-database"></i> fa-database</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-desktop"></i> fa-desktop</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-diamond"></i> fa-diamond</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-dot-circle-o"></i> fa-dot-circle-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-download"></i> fa-download</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-edit"></i> fa-edit <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ellipsis-h"></i> fa-ellipsis-h</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ellipsis-v"></i> fa-ellipsis-v</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-envelope"></i> fa-envelope</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-envelope-o"></i> fa-envelope-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-envelope-square"></i> fa-envelope-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-eraser"></i> fa-eraser</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-exchange"></i> fa-exchange</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-exclamation"></i> fa-exclamation</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-exclamation-circle"></i> fa-exclamation-circle
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-exclamation-triangle"></i>
                          fa-exclamation-triangle
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-external-link"></i> fa-external-link</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-external-link-square"></i>
                          fa-external-link-square
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-eye"></i> fa-eye</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-eye-slash"></i> fa-eye-slash</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-eyedropper"></i> fa-eyedropper</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-fax"></i> fa-fax</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-feed"></i> fa-feed <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-female"></i> fa-female</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-fighter-jet"></i> fa-fighter-jet</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-archive-o"></i> fa-file-archive-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-audio-o"></i> fa-file-audio-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-code-o"></i> fa-file-code-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-excel-o"></i> fa-file-excel-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-image-o"></i> fa-file-image-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-movie-o"></i> fa-file-movie-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-pdf-o"></i> fa-file-pdf-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-photo-o"></i> fa-file-photo-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-picture-o"></i> fa-file-picture-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-powerpoint-o"></i> fa-file-powerpoint-o
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-sound-o"></i> fa-file-sound-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-video-o"></i> fa-file-video-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-word-o"></i> fa-file-word-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-zip-o"></i> fa-file-zip-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-film"></i> fa-film</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-filter"></i> fa-filter</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-fire"></i> fa-fire</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-fire-extinguisher"></i> fa-fire-extinguisher
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-flag"></i> fa-flag</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-flag-checkered"></i> fa-flag-checkered</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-flag-o"></i> fa-flag-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-flash"></i> fa-flash <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-flask"></i> fa-flask</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-folder"></i> fa-folder</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-folder-o"></i> fa-folder-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-folder-open"></i> fa-folder-open</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-folder-open-o"></i> fa-folder-open-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-frown-o"></i> fa-frown-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-futbol-o"></i> fa-futbol-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gamepad"></i> fa-gamepad</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gavel"></i> fa-gavel</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gear"></i> fa-gear <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gears"></i> fa-gears <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gift"></i> fa-gift</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-glass"></i> fa-glass</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-globe"></i> fa-globe</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-graduation-cap"></i> fa-graduation-cap</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-group"></i> fa-group <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-grab-o"></i> fa-hand-grab-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-lizard-o"></i> fa-hand-lizard-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-paper-o"></i> fa-hand-paper-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-peace-o"></i> fa-hand-peace-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-pointer-o"></i> fa-hand-pointer-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-rock-o"></i> fa-hand-rock-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-scissors-o"></i> fa-hand-scissors-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-spock-o"></i> fa-hand-spock-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-stop-o"></i> fa-hand-stop-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hdd-o"></i> fa-hdd-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-headphones"></i> fa-headphones</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-heart"></i> fa-heart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-heart-o"></i> fa-heart-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-heartbeat"></i> fa-heartbeat</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-history"></i> fa-history</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-home"></i> fa-home</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hotel"></i> fa-hotel <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass"></i> fa-hourglass</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-1"></i> fa-hourglass-1
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-2"></i> fa-hourglass-2
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-3"></i> fa-hourglass-3
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-end"></i> fa-hourglass-end</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-half"></i> fa-hourglass-half</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-o"></i> fa-hourglass-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hourglass-start"></i> fa-hourglass-start</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-i-cursor"></i> fa-i-cursor</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-image"></i> fa-image <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-inbox"></i> fa-inbox</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-industry"></i> fa-industry</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-info"></i> fa-info</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-info-circle"></i> fa-info-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-institution"></i> fa-institution
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-key"></i> fa-key</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-keyboard-o"></i> fa-keyboard-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-language"></i> fa-language</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-laptop"></i> fa-laptop</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-leaf"></i> fa-leaf</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-legal"></i> fa-legal <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-lemon-o"></i> fa-lemon-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-level-down"></i> fa-level-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-level-up"></i> fa-level-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-life-bouy"></i> fa-life-bouy
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-life-buoy"></i> fa-life-buoy
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-life-ring"></i> fa-life-ring</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-life-saver"></i> fa-life-saver
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-lightbulb-o"></i> fa-lightbulb-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-line-chart"></i> fa-line-chart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-location-arrow"></i> fa-location-arrow</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-lock"></i> fa-lock</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-magic"></i> fa-magic</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-magnet"></i> fa-magnet</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mail-forward"></i> fa-mail-forward
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mail-reply"></i> fa-mail-reply
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mail-reply-all"></i> fa-mail-reply-all
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-male"></i> fa-male</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-map"></i> fa-map</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-map-marker"></i> fa-map-marker</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-map-o"></i> fa-map-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-map-pin"></i> fa-map-pin</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-map-signs"></i> fa-map-signs</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-meh-o"></i> fa-meh-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-microphone"></i> fa-microphone</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-microphone-slash"></i> fa-microphone-slash
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-minus"></i> fa-minus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-minus-circle"></i> fa-minus-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-minus-square"></i> fa-minus-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-minus-square-o"></i> fa-minus-square-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mobile"></i> fa-mobile</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mobile-phone"></i> fa-mobile-phone
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-money"></i> fa-money</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-moon-o"></i> fa-moon-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mortar-board"></i> fa-mortar-board
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-motorcycle"></i> fa-motorcycle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mouse-pointer"></i> fa-mouse-pointer</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-music"></i> fa-music</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-navicon"></i> fa-navicon
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-newspaper-o"></i> fa-newspaper-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-object-group"></i> fa-object-group</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-object-ungroup"></i> fa-object-ungroup</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-paint-brush"></i> fa-paint-brush</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-paper-plane"></i> fa-paper-plane</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-paper-plane-o"></i> fa-paper-plane-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-paw"></i> fa-paw</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pencil"></i> fa-pencil</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pencil-square"></i> fa-pencil-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pencil-square-o"></i> fa-pencil-square-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-phone"></i> fa-phone</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-phone-square"></i> fa-phone-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-photo"></i> fa-photo <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-picture-o"></i> fa-picture-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pie-chart"></i> fa-pie-chart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plane"></i> fa-plane</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plug"></i> fa-plug</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plus"></i> fa-plus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plus-circle"></i> fa-plus-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plus-square"></i> fa-plus-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plus-square-o"></i> fa-plus-square-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-power-off"></i> fa-power-off</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-print"></i> fa-print</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-puzzle-piece"></i> fa-puzzle-piece</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-qrcode"></i> fa-qrcode</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-question"></i> fa-question</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-question-circle"></i> fa-question-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-quote-left"></i> fa-quote-left</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-quote-right"></i> fa-quote-right</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-random"></i> fa-random</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-recycle"></i> fa-recycle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-refresh"></i> fa-refresh</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-registered"></i> fa-registered</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-remove"></i> fa-remove
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-reorder"></i> fa-reorder
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-reply"></i> fa-reply</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-reply-all"></i> fa-reply-all</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-retweet"></i> fa-retweet</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-road"></i> fa-road</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rocket"></i> fa-rocket</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rss"></i> fa-rss</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rss-square"></i> fa-rss-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-search"></i> fa-search</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-search-minus"></i> fa-search-minus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-search-plus"></i> fa-search-plus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-send"></i> fa-send <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-send-o"></i> fa-send-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-server"></i> fa-server</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-share"></i> fa-share</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-share-alt"></i> fa-share-alt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-share-alt-square"></i> fa-share-alt-square
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-share-square"></i> fa-share-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-share-square-o"></i> fa-share-square-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-shield"></i> fa-shield</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ship"></i> fa-ship</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-shopping-cart"></i> fa-shopping-cart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sign-in"></i> fa-sign-in</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sign-out"></i> fa-sign-out</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-signal"></i> fa-signal</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sitemap"></i> fa-sitemap</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sliders"></i> fa-sliders</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-smile-o"></i> fa-smile-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-soccer-ball-o"></i> fa-soccer-ball-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort"></i> fa-sort</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-alpha-asc"></i> fa-sort-alpha-asc</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-alpha-desc"></i> fa-sort-alpha-desc</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-amount-asc"></i> fa-sort-amount-asc</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-amount-desc"></i> fa-sort-amount-desc
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-asc"></i> fa-sort-asc</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-desc"></i> fa-sort-desc</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-down"></i> fa-sort-down
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-numeric-asc"></i> fa-sort-numeric-asc
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-numeric-desc"></i> fa-sort-numeric-desc
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sort-up"></i> fa-sort-up
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-space-shuttle"></i> fa-space-shuttle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-spinner"></i> fa-spinner</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-spoon"></i> fa-spoon</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-square"></i> fa-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-square-o"></i> fa-square-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-star"></i> fa-star</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-star-half"></i> fa-star-half</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-star-half-empty"></i> fa-star-half-empty
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-star-half-full"></i> fa-star-half-full
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-star-half-o"></i> fa-star-half-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-star-o"></i> fa-star-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sticky-note"></i> fa-sticky-note</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sticky-note-o"></i> fa-sticky-note-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-street-view"></i> fa-street-view</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-suitcase"></i> fa-suitcase</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sun-o"></i> fa-sun-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-support"></i> fa-support
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tablet"></i> fa-tablet</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tachometer"></i> fa-tachometer</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tag"></i> fa-tag</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tags"></i> fa-tags</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tasks"></i> fa-tasks</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-taxi"></i> fa-taxi</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-television"></i> fa-television</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-terminal"></i> fa-terminal</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-thumb-tack"></i> fa-thumb-tack</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-down"></i> fa-thumbs-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-o-down"></i> fa-thumbs-o-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-o-up"></i> fa-thumbs-o-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-up"></i> fa-thumbs-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ticket"></i> fa-ticket</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-times"></i> fa-times</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-times-circle"></i> fa-times-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-times-circle-o"></i> fa-times-circle-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tint"></i> fa-tint</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-down"></i> fa-toggle-down
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-left"></i> fa-toggle-left
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-off"></i> fa-toggle-off</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-on"></i> fa-toggle-on</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-right"></i> fa-toggle-right
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-up"></i> fa-toggle-up
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-trademark"></i> fa-trademark</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-trash"></i> fa-trash</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-trash-o"></i> fa-trash-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tree"></i> fa-tree</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-trophy"></i> fa-trophy</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-truck"></i> fa-truck</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tty"></i> fa-tty</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tv"></i> fa-tv
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-umbrella"></i> fa-umbrella</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-university"></i> fa-university</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-unlock"></i> fa-unlock</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-unlock-alt"></i> fa-unlock-alt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-unsorted"></i> fa-unsorted
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-upload"></i> fa-upload</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-user"></i> fa-user</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-user-plus"></i> fa-user-plus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-user-secret"></i> fa-user-secret</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-user-times"></i> fa-user-times</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-users"></i> fa-users</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-video-camera"></i> fa-video-camera</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-volume-down"></i> fa-volume-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-volume-off"></i> fa-volume-off</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-volume-up"></i> fa-volume-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-warning"></i> fa-warning
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair"></i> fa-wheelchair</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-wifi"></i> fa-wifi</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-wrench"></i> fa-wrench</div>
                      </div>
                    </section>

                    <section id="hand">
                      <h4 className="page-header">Hand Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-grab-o"></i> fa-hand-grab-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-lizard-o"></i> fa-hand-lizard-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-down"></i> fa-hand-o-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-left"></i> fa-hand-o-left</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-right"></i> fa-hand-o-right</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-up"></i> fa-hand-o-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-paper-o"></i> fa-hand-paper-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-peace-o"></i> fa-hand-peace-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-pointer-o"></i> fa-hand-pointer-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-rock-o"></i> fa-hand-rock-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-scissors-o"></i> fa-hand-scissors-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-spock-o"></i> fa-hand-spock-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-stop-o"></i> fa-hand-stop-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-down"></i> fa-thumbs-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-o-down"></i> fa-thumbs-o-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-o-up"></i> fa-thumbs-o-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-thumbs-up"></i> fa-thumbs-up</div>
                      </div>
                    </section>

                    <section id="transportation">
                      <h4 className="page-header">Transportation Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ambulance"></i> fa-ambulance</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-automobile"></i> fa-automobile
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bicycle"></i> fa-bicycle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bus"></i> fa-bus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cab"></i> fa-cab <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-car"></i> fa-car</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-fighter-jet"></i> fa-fighter-jet</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-motorcycle"></i> fa-motorcycle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plane"></i> fa-plane</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rocket"></i> fa-rocket</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ship"></i> fa-ship</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-space-shuttle"></i> fa-space-shuttle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-subway"></i> fa-subway</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-taxi"></i> fa-taxi</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-train"></i> fa-train</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-truck"></i> fa-truck</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair"></i> fa-wheelchair</div>
                      </div>
                    </section>

                    <section id="gender">
                      <h4 className="page-header">Gender Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-genderless"></i> fa-genderless</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-intersex"></i> fa-intersex
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mars"></i> fa-mars</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mars-double"></i> fa-mars-double</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mars-stroke"></i> fa-mars-stroke</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mars-stroke-h"></i> fa-mars-stroke-h</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mars-stroke-v"></i> fa-mars-stroke-v</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-mercury"></i> fa-mercury</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-neuter"></i> fa-neuter</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-transgender"></i> fa-transgender</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-transgender-alt"></i> fa-transgender-alt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-venus"></i> fa-venus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-venus-double"></i> fa-venus-double</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-venus-mars"></i> fa-venus-mars</div>
                      </div>
                    </section>

                    <section id="file-type">
                      <h2 className="page-header">File Type Icons</h2>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file"></i> fa-file</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-archive-o"></i> fa-file-archive-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-audio-o"></i> fa-file-audio-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-code-o"></i> fa-file-code-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-excel-o"></i> fa-file-excel-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-image-o"></i> fa-file-image-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-movie-o"></i> fa-file-movie-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-o"></i> fa-file-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-pdf-o"></i> fa-file-pdf-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-photo-o"></i> fa-file-photo-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-picture-o"></i> fa-file-picture-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-powerpoint-o"></i> fa-file-powerpoint-o
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-sound-o"></i> fa-file-sound-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-text"></i> fa-file-text</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-text-o"></i> fa-file-text-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-video-o"></i> fa-file-video-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-word-o"></i> fa-file-word-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-zip-o"></i> fa-file-zip-o
                          <span className="text-muted">(alias)</span></div>
                      </div>
                    </section>

                    <section id="spinner">
                      <h2 className="page-header">Spinner Icons</h2>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-circle-o-notch"></i> fa-circle-o-notch</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cog"></i> fa-cog</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gear"></i> fa-gear <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-refresh"></i> fa-refresh</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-spinner"></i> fa-spinner</div>
                      </div>
                    </section>

                    <section id="form-control">
                      <h4 className="page-header">Form Control Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-check-square"></i> fa-check-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-check-square-o"></i> fa-check-square-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-circle"></i> fa-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-circle-o"></i> fa-circle-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-dot-circle-o"></i> fa-dot-circle-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-minus-square"></i> fa-minus-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-minus-square-o"></i> fa-minus-square-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plus-square"></i> fa-plus-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plus-square-o"></i> fa-plus-square-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-square"></i> fa-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-square-o"></i> fa-square-o</div>
                      </div>
                    </section>

                    <section id="payment">
                      <h4 className="page-header">Payment Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-amex"></i> fa-cc-amex</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-diners-club"></i> fa-cc-diners-club</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-discover"></i> fa-cc-discover</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-jcb"></i> fa-cc-jcb</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-mastercard"></i> fa-cc-mastercard</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-paypal"></i> fa-cc-paypal</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-stripe"></i> fa-cc-stripe</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-visa"></i> fa-cc-visa</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-credit-card"></i> fa-credit-card</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-google-wallet"></i> fa-google-wallet</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-paypal"></i> fa-paypal</div>
                      </div>
                    </section>

                    <section id="chart">
                      <h4 className="page-header">Chart Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-area-chart"></i> fa-area-chart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bar-chart"></i> fa-bar-chart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bar-chart-o"></i> fa-bar-chart-o
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-line-chart"></i> fa-line-chart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pie-chart"></i> fa-pie-chart</div>
                      </div>
                    </section>

                    <section id="currency">
                      <h4 className="page-header">Currency Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bitcoin"></i> fa-bitcoin
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-btc"></i> fa-btc</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cny"></i> fa-cny <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-dollar"></i> fa-dollar
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-eur"></i> fa-eur</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-euro"></i> fa-euro <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gbp"></i> fa-gbp</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gg"></i> fa-gg</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gg-circle"></i> fa-gg-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ils"></i> fa-ils</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-inr"></i> fa-inr</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-jpy"></i> fa-jpy</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-krw"></i> fa-krw</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-money"></i> fa-money</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rmb"></i> fa-rmb <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rouble"></i> fa-rouble
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rub"></i> fa-rub</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ruble"></i> fa-ruble <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rupee"></i> fa-rupee <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-shekel"></i> fa-shekel
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sheqel"></i> fa-sheqel
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-try"></i> fa-try</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-turkish-lira"></i> fa-turkish-lira
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-usd"></i> fa-usd</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-won"></i> fa-won <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-yen"></i> fa-yen <span className="text-muted">(alias)</span>
                        </div>
                      </div>
                    </section>

                    <section id="text-editor">
                      <h4 className="page-header">Text Editor Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-align-center"></i> fa-align-center</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-align-justify"></i> fa-align-justify</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-align-left"></i> fa-align-left</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-align-right"></i> fa-align-right</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bold"></i> fa-bold</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chain"></i> fa-chain <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chain-broken"></i> fa-chain-broken</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-clipboard"></i> fa-clipboard</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-columns"></i> fa-columns</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-copy"></i> fa-copy <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cut"></i> fa-cut <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-dedent"></i> fa-dedent
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-eraser"></i> fa-eraser</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file"></i> fa-file</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-o"></i> fa-file-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-text"></i> fa-file-text</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-file-text-o"></i> fa-file-text-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-files-o"></i> fa-files-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-floppy-o"></i> fa-floppy-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-font"></i> fa-font</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-header"></i> fa-header</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-indent"></i> fa-indent</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-italic"></i> fa-italic</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-link"></i> fa-link</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-list"></i> fa-list</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-list-alt"></i> fa-list-alt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-list-ol"></i> fa-list-ol</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-list-ul"></i> fa-list-ul</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-outdent"></i> fa-outdent</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-paperclip"></i> fa-paperclip</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-paragraph"></i> fa-paragraph</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-paste"></i> fa-paste <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-repeat"></i> fa-repeat</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rotate-left"></i> fa-rotate-left
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rotate-right"></i> fa-rotate-right
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-save"></i> fa-save <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-scissors"></i> fa-scissors</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-strikethrough"></i> fa-strikethrough</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-subscript"></i> fa-subscript</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-superscript"></i> fa-superscript</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-table"></i> fa-table</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-text-height"></i> fa-text-height</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-text-width"></i> fa-text-width</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-th"></i> fa-th</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-th-large"></i> fa-th-large</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-th-list"></i> fa-th-list</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-underline"></i> fa-underline</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-undo"></i> fa-undo</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-unlink"></i> fa-unlink
                          <span className="text-muted">(alias)</span></div>
                      </div>
                    </section>

                    <section id="directional">
                      <h4 className="page-header">Directional Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-angle-double-down"></i> fa-angle-double-down
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-angle-double-left"></i> fa-angle-double-left
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-angle-double-right"></i> fa-angle-double-right
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-angle-double-up"></i> fa-angle-double-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-angle-down"></i> fa-angle-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-angle-left"></i> fa-angle-left</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-angle-right"></i> fa-angle-right</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-angle-up"></i> fa-angle-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-circle-down"></i> fa-arrow-circle-down
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-circle-left"></i> fa-arrow-circle-left
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-circle-o-down"></i>
                          fa-arrow-circle-o-down
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-circle-o-left"></i>
                          fa-arrow-circle-o-left
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-circle-o-right"></i>
                          fa-arrow-circle-o-right
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-circle-o-up"></i> fa-arrow-circle-o-up
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-circle-right"></i> fa-arrow-circle-right
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-circle-up"></i> fa-arrow-circle-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-down"></i> fa-arrow-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-left"></i> fa-arrow-left</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-right"></i> fa-arrow-right</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrow-up"></i> fa-arrow-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows"></i> fa-arrows</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows-alt"></i> fa-arrows-alt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows-h"></i> fa-arrows-h</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows-v"></i> fa-arrows-v</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-down"></i> fa-caret-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-left"></i> fa-caret-left</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-right"></i> fa-caret-right</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-down"></i>
                          fa-caret-square-o-down
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-left"></i>
                          fa-caret-square-o-left
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-right"></i>
                          fa-caret-square-o-right
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-square-o-up"></i> fa-caret-square-o-up
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-caret-up"></i> fa-caret-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chevron-circle-down"></i>
                          fa-chevron-circle-down
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chevron-circle-left"></i>
                          fa-chevron-circle-left
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chevron-circle-right"></i>
                          fa-chevron-circle-right
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chevron-circle-up"></i> fa-chevron-circle-up
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chevron-down"></i> fa-chevron-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chevron-left"></i> fa-chevron-left</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chevron-right"></i> fa-chevron-right</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chevron-up"></i> fa-chevron-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-exchange"></i> fa-exchange</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-down"></i> fa-hand-o-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-left"></i> fa-hand-o-left</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-right"></i> fa-hand-o-right</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hand-o-up"></i> fa-hand-o-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-long-arrow-down"></i> fa-long-arrow-down</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-long-arrow-left"></i> fa-long-arrow-left</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-long-arrow-right"></i> fa-long-arrow-right
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-long-arrow-up"></i> fa-long-arrow-up</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-down"></i> fa-toggle-down
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-left"></i> fa-toggle-left
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-right"></i> fa-toggle-right
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-toggle-up"></i> fa-toggle-up
                          <span className="text-muted">(alias)</span></div>
                      </div>
                    </section>

                    <section id="video-player">
                      <h4 className="page-header">Video Player Icons</h4>

                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-arrows-alt"></i> fa-arrows-alt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-backward"></i> fa-backward</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-compress"></i> fa-compress</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-eject"></i> fa-eject</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-expand"></i> fa-expand</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-fast-backward"></i> fa-fast-backward</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-fast-forward"></i> fa-fast-forward</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-forward"></i> fa-forward</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pause"></i> fa-pause</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-play"></i> fa-play</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-play-circle"></i> fa-play-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-play-circle-o"></i> fa-play-circle-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-random"></i> fa-random</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-step-backward"></i> fa-step-backward</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-step-forward"></i> fa-step-forward</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-stop"></i> fa-stop</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-youtube-play"></i> fa-youtube-play</div>
                      </div>
                    </section>

                    <section id="brand">
                      <h4 className="page-header">Brand Icons</h4>

                      <div className="alert alert-info">
                        <ul className="margin-bottom-none padding-left-lg">
                          <li>All brand icons are trademarks of their respective owners.</li>
                          <li>The use of these trademarks does not indicate endorsement of the trademark holder by Font
                            Awesome, nor vice versa.
                          </li>
                        </ul>
                      </div>
                      <div className="row fontawesome-icon-list">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-500px"></i> fa-500px</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-adn"></i> fa-adn</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-amazon"></i> fa-amazon</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-android"></i> fa-android</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-angellist"></i> fa-angellist</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-apple"></i> fa-apple</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-behance"></i> fa-behance</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-behance-square"></i> fa-behance-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bitbucket"></i> fa-bitbucket</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bitbucket-square"></i> fa-bitbucket-square
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-bitcoin"></i> fa-bitcoin
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-black-tie"></i> fa-black-tie</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-btc"></i> fa-btc</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-buysellads"></i> fa-buysellads</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-amex"></i> fa-cc-amex</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-diners-club"></i> fa-cc-diners-club</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-discover"></i> fa-cc-discover</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-jcb"></i> fa-cc-jcb</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-mastercard"></i> fa-cc-mastercard</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-paypal"></i> fa-cc-paypal</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-stripe"></i> fa-cc-stripe</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-cc-visa"></i> fa-cc-visa</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-chrome"></i> fa-chrome</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-codepen"></i> fa-codepen</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-connectdevelop"></i> fa-connectdevelop</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-contao"></i> fa-contao</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-css3"></i> fa-css3</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-dashcube"></i> fa-dashcube</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-delicious"></i> fa-delicious</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-deviantart"></i> fa-deviantart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-digg"></i> fa-digg</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-dribbble"></i> fa-dribbble</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-dropbox"></i> fa-dropbox</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-drupal"></i> fa-drupal</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-empire"></i> fa-empire</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-expeditedssl"></i> fa-expeditedssl</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-facebook"></i> fa-facebook</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-facebook-f"></i> fa-facebook-f
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-facebook-official"></i> fa-facebook-official
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-facebook-square"></i> fa-facebook-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-firefox"></i> fa-firefox</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-flickr"></i> fa-flickr</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-fonticons"></i> fa-fonticons</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-forumbee"></i> fa-forumbee</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-foursquare"></i> fa-foursquare</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ge"></i> fa-ge
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-get-pocket"></i> fa-get-pocket</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gg"></i> fa-gg</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gg-circle"></i> fa-gg-circle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-git"></i> fa-git</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-git-square"></i> fa-git-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-github"></i> fa-github</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-github-alt"></i> fa-github-alt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-github-square"></i> fa-github-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gittip"></i> fa-gittip
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-google"></i> fa-google</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-google-plus"></i> fa-google-plus</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-google-plus-square"></i> fa-google-plus-square
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-google-wallet"></i> fa-google-wallet</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-gratipay"></i> fa-gratipay</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hacker-news"></i> fa-hacker-news</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-houzz"></i> fa-houzz</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-html5"></i> fa-html5</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-instagram"></i> fa-instagram</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-internet-explorer"></i> fa-internet-explorer
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ioxhost"></i> fa-ioxhost</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-joomla"></i> fa-joomla</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-jsfiddle"></i> fa-jsfiddle</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-lastfm"></i> fa-lastfm</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-lastfm-square"></i> fa-lastfm-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-leanpub"></i> fa-leanpub</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-linkedin"></i> fa-linkedin</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-linkedin-square"></i> fa-linkedin-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-linux"></i> fa-linux</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-maxcdn"></i> fa-maxcdn</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-meanpath"></i> fa-meanpath</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-medium"></i> fa-medium</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-odnoklassniki"></i> fa-odnoklassniki</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-odnoklassniki-square"></i>
                          fa-odnoklassniki-square
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-opencart"></i> fa-opencart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-openid"></i> fa-openid</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-opera"></i> fa-opera</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-optin-monster"></i> fa-optin-monster</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pagelines"></i> fa-pagelines</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-paypal"></i> fa-paypal</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pied-piper"></i> fa-pied-piper</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pied-piper-alt"></i> fa-pied-piper-alt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pinterest"></i> fa-pinterest</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pinterest-p"></i> fa-pinterest-p</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-pinterest-square"></i> fa-pinterest-square
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-qq"></i> fa-qq</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ra"></i> fa-ra
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-rebel"></i> fa-rebel</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-reddit"></i> fa-reddit</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-reddit-square"></i> fa-reddit-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-renren"></i> fa-renren</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-safari"></i> fa-safari</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-sellsy"></i> fa-sellsy</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-share-alt"></i> fa-share-alt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-share-alt-square"></i> fa-share-alt-square
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-shirtsinbulk"></i> fa-shirtsinbulk</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-simplybuilt"></i> fa-simplybuilt</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-skyatlas"></i> fa-skyatlas</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-skype"></i> fa-skype</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-slack"></i> fa-slack</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-slideshare"></i> fa-slideshare</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-soundcloud"></i> fa-soundcloud</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-spotify"></i> fa-spotify</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-stack-exchange"></i> fa-stack-exchange</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-stack-overflow"></i> fa-stack-overflow</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-steam"></i> fa-steam</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-steam-square"></i> fa-steam-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-stumbleupon"></i> fa-stumbleupon</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-stumbleupon-circle"></i> fa-stumbleupon-circle
                        </div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tencent-weibo"></i> fa-tencent-weibo</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-trello"></i> fa-trello</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tripadvisor"></i> fa-tripadvisor</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tumblr"></i> fa-tumblr</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-tumblr-square"></i> fa-tumblr-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-twitch"></i> fa-twitch</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-twitter"></i> fa-twitter</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-twitter-square"></i> fa-twitter-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-viacoin"></i> fa-viacoin</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-vimeo"></i> fa-vimeo</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-vimeo-square"></i> fa-vimeo-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-vine"></i> fa-vine</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-vk"></i> fa-vk</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-wechat"></i> fa-wechat
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-weibo"></i> fa-weibo</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-weixin"></i> fa-weixin</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-whatsapp"></i> fa-whatsapp</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-wikipedia-w"></i> fa-wikipedia-w</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-windows"></i> fa-windows</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-wordpress"></i> fa-wordpress</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-xing"></i> fa-xing</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-xing-square"></i> fa-xing-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-y-combinator"></i> fa-y-combinator</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-y-combinator-square"></i>
                          fa-y-combinator-square <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-yahoo"></i> fa-yahoo</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-yc"></i> fa-yc
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-yc-square"></i> fa-yc-square
                          <span className="text-muted">(alias)</span></div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-yelp"></i> fa-yelp</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-youtube"></i> fa-youtube</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-youtube-play"></i> fa-youtube-play</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-youtube-square"></i> fa-youtube-square</div>
                      </div>
                    </section>

                    <section id="medical">
                      <h4 className="page-header">Medical Icons</h4>

                      <div className="row">
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-ambulance"></i> fa-ambulance</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-h-square"></i> fa-h-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-heart"></i> fa-heart</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-heart-o"></i> fa-heart-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-heartbeat"></i> fa-heartbeat</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-hospital-o"></i> fa-hospital-o</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-medkit"></i> fa-medkit</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-plus-square"></i> fa-plus-square</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-stethoscope"></i> fa-stethoscope</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-user-md"></i> fa-user-md</div>
                        <div className="col-md-3 col-sm-4"><i className="fa fa-fw fa-wheelchair"></i> fa-wheelchair</div>
                      </div>
                    </section>
                  </div>

                  <div className={`tab-pane ${this.state.tabActived === 2 ? 'active' : ''}`} id="glyphicons">

                    <ul className="bs-glyphicons">
                      <li>
                        <span className="glyphicon glyphicon-asterisk"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-asterisk</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-plus"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-plus</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-euro"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-euro</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-eur"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-eur</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-minus"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-minus</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-cloud"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-cloud</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-envelope"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-envelope</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-pencil"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-pencil</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-glass"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-glass</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-music"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-music</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-search"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-search</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-heart"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-heart</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-star</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-star-empty"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-star-empty</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-user"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-user</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-film"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-film</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-th-large"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-th-large</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-th"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-th</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-th-list"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-th-list</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-ok"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-ok</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-remove"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-remove</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-zoom-in"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-zoom-in</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-zoom-out"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-zoom-out</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-off"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-off</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-signal"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-signal</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-cog"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-cog</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-trash"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-trash</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-home"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-home</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-file"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-file</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-time"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-time</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-road"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-road</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-download-alt"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-download-alt</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-download"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-download</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-upload"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-upload</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-inbox"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-inbox</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-play-circle"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-play-circle</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-repeat"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-repeat</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-refresh"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-refresh</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-list-alt"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-list-alt</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-lock"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-lock</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-flag"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-flag</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-headphones"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-headphones</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-volume-off"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-volume-off</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-volume-down"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-volume-down</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-volume-up"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-volume-up</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-qrcode"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-qrcode</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-barcode"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-barcode</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-tag"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-tag</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-tags"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-tags</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-book"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-book</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-bookmark"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-bookmark</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-print"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-print</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-camera"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-camera</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-font"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-font</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-bold"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-bold</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-italic"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-italic</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-text-height"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-text-height</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-text-width"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-text-width</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-align-left"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-align-left</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-align-center"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-align-center</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-align-right"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-align-right</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-align-justify"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-align-justify</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-list"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-list</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-indent-left"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-indent-left</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-indent-right"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-indent-right</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-facetime-video"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-facetime-video</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-picture"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-picture</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-map-marker"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-map-marker</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-adjust"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-adjust</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-tint"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-tint</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-edit"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-edit</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-share"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-share</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-check"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-check</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-move"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-move</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-step-backward"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-step-backward</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-fast-backward"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-fast-backward</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-backward"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-backward</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-play"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-play</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-pause"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-pause</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-stop"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-stop</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-forward"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-forward</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-fast-forward"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-fast-forward</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-step-forward"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-step-forward</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-eject"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-eject</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-chevron-left</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-chevron-right</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-plus-sign"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-plus-sign</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-minus-sign"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-minus-sign</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-remove-sign"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-remove-sign</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-ok-sign"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-ok-sign</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-question-sign"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-question-sign</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-info-sign"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-info-sign</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-screenshot"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-screenshot</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-remove-circle"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-remove-circle</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-ok-circle"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-ok-circle</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-ban-circle"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-ban-circle</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-arrow-left"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-arrow-left</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-arrow-right"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-arrow-right</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-arrow-up"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-arrow-up</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-arrow-down"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-arrow-down</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-share-alt"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-share-alt</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-resize-full"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-resize-full</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-resize-small"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-resize-small</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-exclamation-sign"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-exclamation-sign</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-gift"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-gift</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-leaf"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-leaf</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-fire"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-fire</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-eye-open"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-eye-open</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-eye-close"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-eye-close</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-warning-sign"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-warning-sign</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-plane"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-plane</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-calendar"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-calendar</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-random"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-random</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-comment"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-comment</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-magnet"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-magnet</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-chevron-up</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-chevron-down</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-retweet"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-retweet</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-shopping-cart"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-shopping-cart</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-folder-close"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-folder-close</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-folder-open"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-folder-open</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-resize-vertical"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-resize-vertical</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-resize-horizontal"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-resize-horizontal</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-hdd"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-hdd</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-bullhorn"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-bullhorn</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-bell"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-bell</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-certificate"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-certificate</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-thumbs-up"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-thumbs-up</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-thumbs-down"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-thumbs-down</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-hand-right"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-hand-right</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-hand-left"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-hand-left</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-hand-up"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-hand-up</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-hand-down"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-hand-down</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-circle-arrow-right"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-circle-arrow-right</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-circle-arrow-left"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-circle-arrow-left</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-circle-arrow-up"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-circle-arrow-up</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-circle-arrow-down"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-circle-arrow-down</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-globe"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-globe</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-wrench"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-wrench</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-tasks"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-tasks</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-filter"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-filter</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-briefcase"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-briefcase</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-fullscreen"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-fullscreen</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-dashboard"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-dashboard</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-paperclip"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-paperclip</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-heart-empty"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-heart-empty</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-link"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-link</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-phone"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-phone</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-pushpin"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-pushpin</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-usd"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-usd</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-gbp"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-gbp</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sort"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sort</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sort-by-alphabet"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-alphabet</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sort-by-alphabet-alt"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-alphabet-alt</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sort-by-order"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-order</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sort-by-order-alt"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-order-alt</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sort-by-attributes"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-attributes</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sort-by-attributes-alt"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-attributes-alt</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-unchecked"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-unchecked</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-expand"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-expand</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-collapse-down"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-collapse-down</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-collapse-up"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-collapse-up</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-log-in"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-log-in</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-flash"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-flash</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-log-out"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-log-out</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-new-window"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-new-window</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-record"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-record</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-save"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-save</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-open"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-open</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-saved"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-saved</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-import"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-import</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-export"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-export</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-send"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-send</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-floppy-disk"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-disk</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-floppy-saved"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-saved</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-floppy-remove"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-remove</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-floppy-save"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-save</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-floppy-open"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-open</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-credit-card"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-credit-card</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-transfer"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-transfer</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-cutlery"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-cutlery</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-header"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-header</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-compressed"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-compressed</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-earphone"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-earphone</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-phone-alt"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-phone-alt</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-tower"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-tower</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-stats"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-stats</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sd-video"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sd-video</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-hd-video"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-hd-video</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-subtitles"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-subtitles</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sound-stereo"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sound-stereo</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sound-dolby"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sound-dolby</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sound-5-1"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sound-5-1</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sound-6-1"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sound-6-1</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sound-7-1"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sound-7-1</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-copyright-mark"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-copyright-mark</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-registration-mark"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-registration-mark</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-cloud-download"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-cloud-download</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-cloud-upload"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-cloud-upload</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-tree-conifer"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-tree-conifer</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-tree-deciduous"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-tree-deciduous</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-cd"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-cd</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-save-file"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-save-file</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-open-file"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-open-file</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-level-up"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-level-up</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-copy"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-copy</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-paste"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-paste</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-alert"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-alert</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-equalizer"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-equalizer</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-king"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-king</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-queen"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-queen</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-pawn"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-pawn</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-bishop"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-bishop</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-knight"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-knight</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-baby-formula"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-baby-formula</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-tent"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-tent</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-blackboard"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-blackboard</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-bed"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-bed</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-apple"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-apple</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-erase"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-erase</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-hourglass"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-hourglass</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-lamp"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-lamp</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-duplicate"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-duplicate</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-piggy-bank"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-piggy-bank</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-scissors"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-scissors</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-bitcoin"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-bitcoin</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-btc"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-btc</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-xbt"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-xbt</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-yen"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-yen</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-jpy"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-jpy</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-ruble"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-ruble</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-rub"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-rub</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-scale"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-scale</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-ice-lolly"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-ice-lolly</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-ice-lolly-tasted"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-ice-lolly-tasted</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-education"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-education</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-option-horizontal"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-option-horizontal</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-option-vertical"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-option-vertical</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-menu-hamburger"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-menu-hamburger</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-modal-window"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-modal-window</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-oil"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-oil</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-grain"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-grain</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-sunglasses"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-sunglasses</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-text-size"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-text-size</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-text-color"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-text-color</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-text-background"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-text-background</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-object-align-top"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-top</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-object-align-bottom"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-bottom</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-object-align-horizontal"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-horizontal</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-object-align-left"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-left</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-object-align-vertical"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-vertical</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-object-align-right"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-right</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-triangle-right"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-triangle-right</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-triangle-left"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-triangle-left</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-triangle-bottom"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-triangle-bottom</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-triangle-top"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-triangle-top</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-console"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-console</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-superscript"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-superscript</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-subscript"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-subscript</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-menu-left"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-menu-left</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-menu-right"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-menu-right</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-menu-down"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-menu-down</span>
                      </li>
                      <li>
                        <span className="glyphicon glyphicon-menu-up"></span>
                        <span className="glyphicon-class">glyphicon glyphicon-menu-up</span>
                      </li>
                    </ul>
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

export default UiIcon;
