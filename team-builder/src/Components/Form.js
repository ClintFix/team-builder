import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props //Form needs the form values, updating them based on changes from user, and submit when user clicks submit
    
    const onChange = evt => { //puttin the function here is easier than in the onchage handler in the JSX
        const { name, value } = evt.target; // get name of input and current value
        update(name, value); // invoke update function (updateForm function in app.js) and pass the name & value. This updates formValues state.
    }

    const onSubmit = evt => {
        evt.preventDefault() // make sure that the page isn't reloaded on submit button click, a default bnehavior 
        submit() // invokes submitForm function on app.js, which uses formValues to set state of Members
    }

    return (
        <form className ='form container' onSubmit={onSubmit}>
            <label> Name  
                <input
                    name='name' //must match key that we're expecting in initialFormValues settings
                    type='text'
                    onChange={onChange}
                    value={values.name}
                    placeholder="What's your name?"
                />
            </label>
            <label> Email  
                <input
                    name='email' //must match key that we're expecting in initialFormValues settings
                    type='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder="What's your email?"
                />
            </label>
            <label> Role  
                <select value={values.role} name="role" onChange={onChange}> 
                    <option value=''>Select your role...</option>
                    <option value='UI/UX'>UI/UX</option>
                    <option value='Front-end Engineer'>Front-end Engineer</option>
                    <option value='Back-end Engineer'>Back-end Engineer</option>
                </select>
            </label>
            <button disabled={!values.name || !values.email || !values.role }>submit</button>
        </form>
    )
}