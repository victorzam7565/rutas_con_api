import React from 'react'
import { useParams } from 'react-router-dom'
import {Link}  from 'react-router-dom'

const Nosotro = () => {

       
     const [equipo, setEquipo]= React.useState ([])

    React.useEffect  (() =>  {   
    //console.log('useEffect')
   obtenerDatos()
}, [])

const obtenerDatos = async ()=> {
  const data = await fetch ( ` https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations ` )
   const users = await data.json() 
   //console.log (users)
   setEquipo(users.civilizations)
}
  return (
    <div>
<h1> Nosotros </h1>
    <ul>
      {
  equipo.map (item =>(

   <li key={item.id}> 
   <Link to= { ` /Nosotro/ ${item.id} `     }>  
             {item.name} - {item.expansion}
               
   </Link>
   </li>
  ))
  }
</ul>

</div>
    )
}
 
export default Nosotro;