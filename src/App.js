import React from 'react';

function Dino({fav}){
  return <h3>I just tamed {fav}!!!</h3>
}

function App() {
  return (
   <div>
     <h1>Hell was here.</h1>
     <Dino fav="Parasaurolophus" />
   </div>
  )
}

export default App;
