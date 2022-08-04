import React, {useState, useEffect} from "react";

const FormStage1 = (props) => {

  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  
  function handleFullNameChange(event) {
    setFullName(event.target.value);
  }

  function handleDisplayNameChange(event) {
    setDisplayName(event.target.value);
  }

  return (
    <>
      <form className='form_center' onSubmit={props.changeStage}>
            <div className='input_field'> 
              <label className='labels'>Full Name</label>
              <input 
                className='text_box' 
                type="text" 
                onChange={handleFullNameChange}
                placeholder="Steve Jobs" 
              />
            </div>
            
            <div className='input_field'>
              <label className='labels'>Display Name</label>
              <input 
                className='text_box' 
                type="text" 
                onChange={handleDisplayNameChange}
                placeholder="Steve"
              />
            </div>          
      </form>
    </>
  );
};

export default FormStage1;

