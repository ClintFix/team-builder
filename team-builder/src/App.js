import React, { useState } from 'react'
import './App.css';

// Set initial form values and shape of the state
const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

// Main App component
function App() {
  const [ members, newMembers ] = useState([]); //slice of state for team members
  const [ formValues, setFormValues ] = useState(initialFormValues) // setting initial formvalues as empty strings
  
  return (
    <div className="App">
        {
          members.map(member => {
            return (
              <div>{`${member.name} is a ${member.role} and can be reached at ${member.email}.`} </div>
            )
          })
        }
    </div>
  );
}

export default App;
