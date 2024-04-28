import React from 'react'
import'./NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item';
import plan from '../Assets/plan-img.jpg';
import brkfast from '../Assets/brkfast.png';
export const NewCollections = () => {
  return (
    <div className='plan'>
        <h1>Today's Plan</h1>
        <hr/>

        <div className='plan-img'>
            {/* {new_collections.map((item, i)=>{
                return <Item 
                key={i} 
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}/>
            })} */}
            <img src={plan} alt=''/>
        
        <div className='card'>
            <div className='brkfast'>
              
              <div className='wrap'>
                <div className='img'>
                <img src={brkfast} alt=''/>
                </div>
                <div className='content'>
                  <h3>Breakfast</h3><br> </br>
                  
                </div>

              </div>


            </div>
          </div>
        </div> 
    </div>
  )
}
export default NewCollections;