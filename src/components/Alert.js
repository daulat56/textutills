import React from 'react'

function Alert(props) {
  const capitalise=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <div  style={{height:'60px'}}>

        {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}  
      </div> } 

    </div>
    
      
    
  )
}
export default Alert;

