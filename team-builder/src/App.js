import React, { useEffect, useState } from 'react'
import Form from './Components/Form'
import './App.css';

// Set initial form values and shape of the state
const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

// Main App component
function App() {
  const [ members, setMembers ] = useState([]); //slice of state for team members
  const [ formValues, setFormValues ] = useState(initialFormValues) // setting initial formvalues as empty strings
  const [ memberToEdit, setMemberToEdit ] = useState([]);
  
  const updateForm = (inputName, inputValue) => { //takes form inputs and pushes them to state
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => { // when user hits submit, a new object literal is created with the member details as entered in the form, then updates state with new member data
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    setMembers([...members, newMember])
    setFormValues(initialFormValues)
  }

  const editMember = (evt) => {
    const value = evt.target.value; 
    setMemberToEdit(members.filter(member => member.email === value))
  }

  useEffect(() => {
    if (!memberToEdit[0]) {
      setFormValues(initialFormValues)
    } else {
      setFormValues(memberToEdit[0])
    }
  },[memberToEdit])


  return (
    <div className="App">
      <Form values={formValues} update={updateForm} submit={submitForm}/>
        {
          members.map(member => {
            return (
              <div>{`${member.name} is a ${member.role} and can be reached at ${member.email}.`} <button value={member.email} onClick={editMember}>Edit</button></div>
            )
          })
        }
    </div>
  );
}

export default App;
