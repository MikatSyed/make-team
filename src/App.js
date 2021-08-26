import User from '../src/Component/User/User'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[users,setUsers] = useState([])
  const [team,setTeam] = useState([])
 

  useEffect(()=> {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data =>
     setUsers(data.results))
  },[])
 const handleAddMember = name =>{
  //  console.log("clicked",member);
   const newCart = [...team,name]
 
   setTeam(newCart)
 }
  return (
    <div>
     <h3>Team Builder</h3>
     {
       team.map(td =><li>{td}</li>)
     }
    {
      users.map(user => <User user={user} key={user.id.value} handleAddMember={handleAddMember}/>)
    }
    </div>
  );
}

export default App;
