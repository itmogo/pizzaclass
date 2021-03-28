import {Component} from 'react';

class PizzaTypes extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container pizza-types"> 
            <div className="row">
              <h3 className="text-center">{this.props.pizzatypes}</h3>
              <div className="col-md-3">
                <div className="thumbnail">
                  <img src={this.props.pepimg} alt="Pepperoni pizza"/>
                  <div className="caption">
                    <h3>{this.props.pepp}</h3>
                    <p> Pepperoni is an American variety of salami,
                       made from a cured mixture of pork and beef 
                       seasoned with paprika or other chili pepper.
                      Pepperoni is characteristically soft,
                      slightly smoky, and bright red in color.
                      Thinly sliced pepperoni is a popular
                      pizza topping in American pizzerias.  </p>  
                               
                  </div>
                </div>      
              </div>
                <div className="col-md-3">
                  <div className="thumbnail">
                  <img src={this.props.vegimg} alt="Vegetarian pizza"/>
                  <div className="caption">
                   <h3>{this.props.veg}</h3>
                    <p> Make a pizza with crescent roll dough and
                       top with seasoned cream cheese and lots of
                        fresh, colorful vegetables for a tasty appetizer.
                         It's best to make it a day ahead of time to blend 
                         flavors; use 6 cups of your favorite assorted
                         chopped vegetables for topping.</p>           
                  </div>
                </div> 
              </div>
                <div className="col-md-3">
                  <div className="thumbnail">
                    <img src={this.props.chesseimg} alt="chesse pizza"/>
                    <div className="caption">
                      <h3>{this.props.chesse}</h3>
                      <p> Pizza cheese encompasses several varieties and types of cheeses and dairy products
                       that are designed and manufactured for use specifically on pizza. These include processed
                        and modified cheese such as mozzarella-like processed cheeses and mozzarella variants.
                         </p>            
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail">
                    <img src={this.props.bossuimg} alt="bossu pizza"/>
                    <div className="caption">
                      <h3>{this.props.bossu}</h3>
                      <p> Bosses opened to the public in 2004 from a 
                        humble beginning and has since spread across 
                        the state. We have been serving the best pizza,
                        wings, burgers, and the coldest beer in Texas 
                        for years. We have created a retro, fun family
                        stop.We have created a retro, fun family.
                         </p>            
                    </div>
                  </div>
                </div>        
              </div>
          </div>

        )
    }
}

export default PizzaTypes;