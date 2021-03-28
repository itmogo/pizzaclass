import {Component} from 'react';

class Navbar extends Component{ 

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <nav className="navbar navbar-default navbar-home">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">{this.props.brand}</a>
              </div>
              
                  <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">{this.props.home}</a></li>
                  <li><a href="#">{this.props.about_pizza}</a></li>
                  <li><a href="#">{this.props.pizza_types}</a></li>
                  </ul>     
            
            </div>
          </nav>
          </div>
    
        )
    }
}
export default Navbar;