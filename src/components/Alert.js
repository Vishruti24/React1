import React from 'react'

function Alert(props) {
   
     if (!props.alert) return null;
  return (
    //CLS
    <div style={{height:'50px'}}>
    
<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong> {props.alert.msg} {/*string concat*/}
</div>
</div>    
  )
}

export default Alert
