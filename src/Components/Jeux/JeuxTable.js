/**
 * @author LUDO
 * Licence Lud-ly2020
 * JeuxTable.js react
 */
import React ,{Component} from 'react';
import JeuxCategory from './JeuxCategory';
import JeuxRow from './JeuxRow';

class JeuxTable extends Component{
    constructor (props){
        super(props);
        console.log("liste des jeux dans jeuxtable" ,props.jeux);
    }
    
    render(){
        const filterText = this.props.filterText;
        const ps3Only = this.props.ps3Only;
          const ps4Only = this.props.ps4Only;
          const neoOnly = this.props.neoOnly;
        

        let lastCategory;
        const rows = [];
        this.props.jeux.forEach(jeu => {
           // console.log(jeu.name,"le jeu est dans jeuxTable")
            if (jeu.name.toLowerCase('toLowerCase').indexOf(filterText) === -1){
              return;
            }
             if(!ps3Only && jeu.stocked){
                return;
            }
            if(!ps4Only && jeu.stocked){
                return;
            }
            if(!neoOnly && jeu.stocked){
                return;
            }
            if(jeu.category !== lastCategory){
                rows.push(<JeuxCategory category={jeu.category}/>)
            }
                
            rows.push(<JeuxRow key={jeu.name} jeu={jeu}/>)
            lastCategory  = jeu.category;
            
        });
      
        
      //rows.push(<JeuxRow key="2"/>);
        
        return(
            <div><span >-Choose your Console-</span>
                <table className="table">
                       <thead>
                            <tr>
                                <th>Nom </th>
                                <th>Genre </th>
                                <th >Année </th>
                                <th>Age </th>
                                <th> Console </th>
                            </tr>
                        </thead>
                    <tbody>
                   {rows}
                    </tbody>
                </table>
            </div>
        )
    }
   
}
export default JeuxTable;

 