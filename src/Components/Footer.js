import {Component} from 'react';

class Footer extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="footer">
        <div className="container">
          <div className="row">
            <p className="text-center">
              {this.props.foot}
            </p> 
          </div>
        </div>
      </div>

        )
    }
}

export default Footer;