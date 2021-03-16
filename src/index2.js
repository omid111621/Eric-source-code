"use strict";
//...........modules.................
import React from "react";
import ReactDOM from "react-dom";
//..........contents................
import gameApplication from "./contents/gameApplication.txt";
import germanAdventure from "./contents/germanAdventure.txt";
import germanSouvenir from "./contents/germanSouvenir.txt";
import goodsDelivery from "./contents/goodsDelivery.txt";
import hostingTourists from "./contents/hostingTourists.txt";
import store from "./contents/store.txt";
import testimonials from "./contents/testimonials.txt";
import translationServices from "./contents/translationServices.txt";
//...................................



//============ Next(more) Button ==========*
class NextButton extends React.Component {
  render() {
      return (
          <div
          className = "service next-button">
          {/* onClick={() => this.props.onClickNext()} */}
            <i className='fas fa-plus'></i>
            <strong>More</strong>
            </div>
      )
  }
}
//============= Back Button =========*
class BackButton extends React.Component {
  render() {
      return (
          <div
          className="service back-button"
          onClick={() => this.props.onClickBack()}>
            
            <i className='fas fa-angle-double-left'></i>
            <strong>Back</strong>
            </div>
      )
  }
}
//==============Sections ============*
class German_Adventure extends React.Component {
  render(){
    return(
          <div className = "section-grid german-adventure">
            <div className = 'section-grid-header german-adventure-header'><h2>{this.props.header}</h2></div>
            <div className = 'section-grid-content german-adventure-content'>{this.props.content}</div>
            <div className = 'section-grid-menue german-adventure-menue'>
              <NextButton onClickNext = {() => this.props.activator('german-adventure-subsection')}/>
              <BackButton onClickBack = {() => this.props.tx()}/>
            </div>
          </div>)
  }
}
class German_Souvenir extends React.Component {
  render(){
    return(
          <div className = "section-grid german-souvenir">
            <div className = 'section-grid-header german-souvenir-header'><h2>{this.props.header}</h2></div>
            <div className = 'section-grid-content german-souvenir-content'>{this.props.content}</div>
            <div className = 'section-grid-menue german-souvenir-menue'>
              <NextButton onClickNext = {() => this.props.activator('german-souvenir-subsection')}/>
              <BackButton onClickBack = {() => this.props.tx()}/>
            </div>
          </div>)
  }
}
class Hosting_Tourists extends React.Component {
  render(){
    return(
          <div className = "section-grid hosting-tourists">
            <div className = 'section-grid-header hosting-tourists-header'><h2>{this.props.header}</h2></div>
            <div className = 'section-grid-content hosting-tourists-content'>{this.props.content}</div>
            <div className = 'section-grid-menue hosting-tourists-menue'>
              <NextButton onClickNext = {() => this.props.activator('hosting-tourists-subsection')}/>
              <BackButton onClickBack = {() => this.props.tx()}/>
            </div>
          </div>)
  }
}
class Store extends React.Component {
  render(){
    return(
          <div className = "section-grid store">
            <div className = 'section-grid-header store-header'><h2>{this.props.header}</h2></div>
            <div className = 'section-grid-content store-content'>{this.props.content}</div>
            <div className = 'section-grid-menue store-menue'>
              <NextButton onClickNext = {() => this.props.activator('store-subsection')}/>
              <BackButton onClickBack = {() => this.props.tx()}/>
            </div>
          </div>)
  }
}
class Goods_Delivery extends React.Component {
  render(){
    return(
          <div className = "section-grid goods-delivery">
            <div className = 'section-grid-header goods-delivery-header'><h2>{this.props.header}</h2></div>
            <div className = 'section-grid-content goods-delivery-content'>{this.props.content}</div>
            <div className = 'section-grid-menue goods-delivery-menue'>
              <NextButton onClickNext = {() => this.props.activator('goods-delivery-subsection')}/>
              <BackButton onClickBack = {() => this.props.tx()}/>
            </div>
          </div>)
  }
}
class Translation_Services extends React.Component {
  render(){
    return(
          <div className = "section-grid translation-services">
            <div className = 'section-grid-header translation-services-header'><h2>{this.props.header}</h2></div>
            <div className = 'section-grid-content translation-services-content'>{this.props.content}</div>
            <div className = 'section-grid-menue translation-services-menue'>
              <NextButton onClickNext = {() => this.props.activator('translation-subsection')}/>
              <BackButton onClickBack = {() => this.props.tx()}/>
            </div>
          </div>)
  }
}
class Game_Application extends React.Component {
  render(){
    return(
          <div className = "section-grid game-application">
            <div className = 'section-grid-header game-application-header'><h2>{this.props.header}</h2></div>
            <div className = 'section-grid-content game-application-content'>{this.props.content}</div>
            <div className = 'section-grid-menue game-application-menue'>
              <NextButton onClickNext = {() => this.props.activator('game-application-subsection')}/>
              <BackButton onClickBack = {() => this.props.tx()}/>
            </div>
          </div>)
  }
}
class Testimonials extends React.Component {
  render(){
    return(
          <div className = "section-grid testimonials">
            <div className = 'section-grid-header testimonials-header'><h2>{this.props.header}</h2></div>
            <div className = 'section-grid-content testimonials-content'>{this.props.content}</div>
            <div className = 'section-grid-menue testimonials-menue'>
              <NextButton onClickNext = {() => this.props.activator('testimonials-subsection')}/>
              <BackButton onClickBack = {() => this.props.tx()}/>
            </div>
          </div>)
  }
}
//========== Landing Page============*
class LandingPage extends React.Component {
   
  render() {
    return(
      <section class="services_section">
      <div class="services_grid">

              <h2 class="services_title">Services</h2>


              <div class="service service_2"
              onClick={() => this.props.activator(`adventure`)}>
                  <h3>German Adventure</h3>
                  <i class="fas fa-hiking"></i>
              </div>

              <div class="service service_2"
              onClick={() => this.props.activator(`german_souvenir`)}>
                  <h3>German Souvenir</h3>
                  <i class="fas fa-gifts"></i>
              </div>

              <div class="service service_3"
              onClick={() => this.props.activator(`hosting_tourists`)}>
                  <h3>Hosting Tourists</h3>
                  <i class="fas fa-hot-tub"></i>
              </div>

              <div class="service service_4"
              onClick={() => this.props.activator(`store`)}>
                  <h3>Store</h3>
                  <i class="fas fa-cart-arrow-down"></i>
              </div>

              <div class="service service_5"
              onClick={() => this.props.activator(`good_delivery`)}>
                  <h3>Goods Delivery</h3>
                  <i class="fas fa-globe-europe"></i>
              </div>

              <div class="service service_6"
              onClick={() => this.props.activator(`translation_services`)}>
                  <h3>Translation Services</h3>
                  <i class="fas fa-pen-nib"></i>
              </div>

              <div class="service service_7"
              onClick={() => this.props.activator(`game_application`)}>
                  <h3>Game-Application</h3>
                  <i class="fas fa-dice"></i>

              </div>

              <div class="service service_8"
              onClick={() => this.props.activator(`testimonials`)}>
                  <h3>Testimonials</h3>
                  <i class="far fa-grin-hearts"></i>
              </div>


          </div>
      </section>
    );
  }
}
//=========== Main Component ========*
class MainBox extends React.Component {
   
  constructor (props) {
    super (props);
    this.content = {
      about_me : {content : null} ,
      adventure : {header : 'German Adventure' , content : germanAdventure},
      german_souvenir : {header : 'German Souvenir' , content : germanSouvenir},
      hosting_tourists : {header : 'Hosting Tourists' , content : hostingTourists},
      store : {header : 'Store' , content : store},
      good_delivery : {header : 'Goods Delivery' , content : goodsDelivery},
      translation_services : {header : 'Translation Services' , content : translationServices},
      game_application : {header : 'Game & Applications' , content : gameApplication},
      testimonials : {header : 'Testimoials' , content : testimonials},
    }
    this.map = {
          landing_page : <LandingPage 
                                    activator={(i) => this.activator(i)} />,

          adventure : <German_Adventure 
                                              activator={(i) => this.activator(i)}  
                                              tx={() => this.handleClickBack()}
                                              header = {this.content.adventure.header}
                                              content = {this.content.adventure.content} />,

          german_souvenir : <German_Souvenir 
                                            activator={(i) => this.activator(i)} 
                                            tx={() => this.handleClickBack()}
                                            header = {this.content.german_souvenir.header}
                                            content = {this.content.german_souvenir.content}/>,

          hosting_tourists : <Hosting_Tourists 
                                              activator={(i) => this.activator(i)} 
                                              tx={() => this.handleClickBack()}
                                              header = {this.content.hosting_tourists.header}
                                              content = {this.content.hosting_tourists.content}/>,

          store : <Store 
                        activator={(i) => this.activator(i)} 
                        tx={() => this.handleClickBack()}
                        header = {this.content.store.header}
                        content = {this.content.store.content}/>,

          good_delivery : <Goods_Delivery 
                                        activator={(i) => this.activator(i)} 
                                        tx={() => this.handleClickBack()}
                                        header = {this.content.good_delivery.header}
                                        content = {this.content.good_delivery.content}/>,

          translation_services : <Translation_Services 
                                                      activator={(i) => this.activator(i)} 
                                                      tx={() => this.handleClickBack()}
                                                      header = {this.content.translation_services.header}
                                                      content = {this.content.translation_services.content}/>,

          game_application : <Game_Application 
                                              activator={(i) => this.activator(i)} 
                                              tx={() => this.handleClickBack()}
                                              header = {this.content.game_application.header}
                                              content = {this.content.game_application.content}/>,

          testimonials : <Testimonials 
                                      activator={(i) => this.activator(i)} 
                                      tx={() => this.handleClickBack()}
                                      header = {this.content.testimonials.header}
                                      content = {this.content.testimonials.content}/>
                                      
    };

    this.state = {
      onScreen : [this.map.landing_page]
    }
  }

  activator (i) {
    this.router(i);
  }

  router (i) {
    const onScreen = this.state.onScreen.concat (this.map[i]);
    
    this.setState ( {onScreen : onScreen} );
  
  }

  handleClickBack () {
    const onScreen = this.state.onScreen.slice ();
    onScreen.splice (this.state.onScreen.length-1, 1);
    this.setState ( {onScreen : onScreen});
     

  }

output()   {

  return this.state.onScreen[this.state.onScreen.length-1];
    
}
  render () {
      return (
        <div className = 'services_section'> 
          {this.output()}
        </div>
      )
  }
}
//===================================*
ReactDOM.render(<MainBox/>, document.getElementById('myApp'));
