import {Component} from 'react';

class About extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className="about-pizza">
            <div className="container">
                <div className="row">
                   <h2 className="text-center">{this.props.about_pizza}</h2>
                   <div className="col-md-6"> 
                      <img src={this.props.pizza} alt="pizza" className="img-responsive" />
                   </div>   
                   <div className=" col-md-6 text-justify"> 
                     <h3> Pizza is awesome</h3>
                    <p> The history of pizza begins in antiquity, when various ancient cultures produced basic flatbreads with several toppings.
                      A precursor of pizza was probably the focaccia, a flat bread known to the Romans as panis focacius, to which toppings were 
                      then added. Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century.            
                      The word pizza was first documented in A.D. 997 in Gaeta and successively in different parts of Central and Southern Italy.
                      Pizza was mainly eaten in Italy and by emigrants from there. This changed after World War II when Allied troops stationed in Italy
                      came to enjoy pizza along with other Italian foods.</p>
          
                      <p>Some commentators have suggested that the origins of modern pizza can be traced to pizzarelle, which were kosher for Passover cookies 
                        eaten by Roman Jews after returning from the synagogue on that holiday, though some also trace its origins to other Italian paschal 
                        breads. Abba Eban writes "some scholars think [pizza] was first made more than 2000 years ago when Roman soldiers added cheese and 
                        olive oil to matzah".better source needed] Other examples of flatbreads that survive to this day from the ancient Mediterranean world 
                        are focaccia (which may date back as far as the ancient Etruscans); Manakish in Levant, coca (which has sweet and savory varieties) from
                        Catalonia, Valencia and the Balearic Islands; the Greek Pita; Lepinja in the Balkans; or Piadina in the Romagna part of Emilia-Romagna 
                        in Italy.</p>
          
                        <p>Foods similar to flatbreads in other parts of the world include Chinese bing (a wheat flour-based Chinese food with a flattened or 
                          disk-like shape); the Indian paratha (in which fat is incorporated); the Central and South Asian naan (leavened) and roti (unleavened); 
                          the Sardinian carasau, spianata, guttiau, pistoccu; and Finnish rieska. Also worth noting is that throughout Europe there are many similar
                          pies based on the idea of covering flat pastry with cheese, meat, vegetables and seasoning such as the Alsatian flammkuchen.</p>      
                      </div>
                      </div>
                      </div>
                </div>

        )  
      }
}
export default About;