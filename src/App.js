import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import About from './Components/About';
import PizzaTypes from './Components/PizzaTypes';
import Footer from './Components/Footer';


class App extends Component{

  render() {
    return (
      <div>
        <Navbar  brand = 'PIZZAMANIA'  home='Home' about_pizza ='About Pizza' pizza_types='Pizza Types'/>
        <Slider chania ='images/banner4.jpg' chicago ='images/slideimg.jpg' newyork ='images/anthony.jpg' />
        <About about_pizza='About Pizza' pizza='images/tanya-patrikeyeva-T1PQyUwbriA-unsplash.jpg'/>
        <PizzaTypes pizzatypes='Pizza Types' pepimg='images/photo-1534308983496-4fabb1a015ee_pepperoni.jpg' pepp='Pepperoni Pizza' vegimg='images/photo-1490717064594-3bd2c4081693_vegetarian.jpg' veg='Vegetarian Pizza' 
        chesseimg='images/photo-1513104890138-7c749659a591_cheese.jpg' chesse='Cheese Pizza' bossuimg='images/sheri-silver-A4EtgLN1_Fw-unsplash.jpg' 
         bossu ='Bossu Pizza' />
        <Footer foot='&copy; 2020 Pizzamania All Rights Reserved!
'/>
      </div>
    )
  }
}
 
export default App;
