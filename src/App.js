
import './App.css';
import {useState} from "react";
import {data} from './data'

function App() {

  const [places,setPLaces] = useState(data);
  const [showText,setShowText] = useState(false)

  const removeItem = (id) =>{
    let newPlace = places.filter(place=>
    place.id !== id);
    setPLaces(newPlace)
  }
  

   const showTextClick =(element) =>{
    element.showMore = !element.showMore
    setShowText (!showText)
  }

  return (
  <div>
      <div className="container" >
        <h1>{places.length} World's Best Places to Visit</h1>
    </div>

    {places.map ((element =>{
      const {id,place,image,description,showMore} = element;

      return (
        <div className="container" key={id}>
          <div className="container">
            <h3>{id}-{place}</h3>
          </div>
          <div className="container">
            <img src={image} width="300px" height="300px" alt="places"/>
          </div>
          <div className="container">
            <p>{showText?description:description.substring(0,200)+"..."}
            <button onClick ={()=> {showTextClick(element)} }>{showMore?"Show More":"Show Less"}</button>
            </p>
            
          </div>
         <div className="btn">
           <button onClick={()=>{removeItem(id)}}>Delete</button>
         </div>

        </div>
      )


    }))}
     <div className="container">
            <button onClick ={()=>setPLaces([])}>DELETE ALL</button>
          </div>
  </div>
   
 
  );
}

export default App;
