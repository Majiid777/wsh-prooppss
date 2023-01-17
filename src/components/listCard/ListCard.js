import React from 'react'
import Cardd from './cardd/Cardd'




const ListCard = ({esm}) => {
  return (
    <div>
     
      <div style={{display:"flex",flexWrap:"wrap",width:"1000px",height:"10px"}}>
        {/* <div>
            {prin.map((el)=>(
                <Cardd key={el.id} el={el}/>
            ))}
        </div> */}
        {esm.map((el)=>(
        <Cardd key={el.id} el={el}/>
        ))}
    </div>
    </div>
  )
    
    
}

export default ListCard