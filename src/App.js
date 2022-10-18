import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const Url = 'https://course-api.netlify.app/api/react-tours-project';
function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

 const fetchTours = async () => {
  setloading(true)
  try {
    const respond = await fetch(Url);
    const tours = await respond.json();
    setloading(false);
    settours(tours);
  } catch (error) {
    setloading(false)
    console.log(error);
  }
 
 };
 useEffect(() => {
  fetchTours()
 },[])

  if (loading){
    return(
    <main><Loading /></main>
    )
    
  }
  return( <main>
    <Tours tours={tours} />
  </main>
  )
}

export default App;
