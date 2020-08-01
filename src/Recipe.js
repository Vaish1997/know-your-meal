import React from 'react';
import style from './recipe.module.css';
import Collapsible from 'react-collapsible';


const Recipe = ({title, calories,servings,image,healthLabels,dietLabels,cautions,nutrients,ingredients}) => 
{     
    let nutritionInfo = new Array();
    Object.keys(nutrients).forEach(key => {  
           
        nutritionInfo.push({    
        nutritionLabel: nutrients[key].label,
        quantity: nutrients[key].quantity,
        unit: nutrients[key].unit
        
        })
        
      });
      
    return(
        <div>
            <h1 className = {style.recipe}>
                { title }
            </h1>
    <p><strong>Servings: </strong>{ servings }</p>
            <p> <strong>Calories:</strong> {calories}</p>
            <p><strong>Health Labels</strong></p>
            <ol>
            {healthLabels.map(
                healthLabel =>
                 (
                 <li>{healthLabel}</li>
                 )
            )

            }
            </ol>
            <p><strong>Diet Labels</strong></p>
            <ol>
            {dietLabels.map(
                dietLabel =>
                 (
                 <li>{dietLabel}</li>
                 )
            )

            }
            </ol>

            <p><strong>Cautions</strong></p>
            <ol>
            {cautions.map(
                caution =>
                 (
                 <li>{caution}</li>
                 )
            )

            }
            </ol>
        
            <img src= {image} alt= ""></img>
        <Collapsible trigger = "View Ingredients">
        <h3>Ingredients</h3>
        <ul>
            {
                ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
        </ul>
        </Collapsible>
        <Collapsible trigger = 'View Nutrition Info...'>
        <table className = 'darkTable'>
            <thead>
                <tr>
                <th>
                    Label
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    Unit
                </th>
                </tr>
                </thead>
            <tbody>
            {
                nutritionInfo.map(nutrient => (
                    <tr>
                       <td>
                        {nutrient.nutritionLabel}
                        </td>
                        <td>
                        {nutrient.quantity} 
                        </td>
                        <td>
                        {nutrient.unit} 
                        </td>
                        </tr>
                ))}
                </tbody>
                </table>
        </Collapsible>
        
        </div>
        
       
    );
}

export default Recipe;
