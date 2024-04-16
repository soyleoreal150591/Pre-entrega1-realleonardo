import { useState } from 'react'

import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemnListContainer'

function App() {
  const [count , setCount] = useState(0)


  return (

    <>  
   <NavBar></NavBar>
   <ItemListContainer mensaje={" Ya perdió la visión, No pierda Tiempo. Pase y vea."}></ItemListContainer>
    </>

)

}

export default App;
