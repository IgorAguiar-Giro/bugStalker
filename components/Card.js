import React from "react"

const Card = ({color}) => {
  return ( 
<div className={`${color} container h-96 m-2 rounded-xl`} >

    <div className="text-3xl">
      Text

    </div>
  
</div>
)
}

export default Card