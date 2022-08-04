import React, {useState, useEffect} from "react";

const FormStage2 = (props) => {

  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");

  function handleWorkspaceNameChange(event) {
    setWorkspaceName=event.target.value;
  }

  function handleWorkspaceURLChange(event) {
    setWorkspaceURL=event.target.value;
  }

  return (
    <>
      <form className='form_center' onSubmit={props.handleSubmit}>
            <div className='input_field'> 
            <label className='labels'>Workspace Name</label>
            <input 
              className='text_box' 
              type="text" 
              onChange={handleWorkspaceNameChange}
              placeholder="Eden" 
            />
            </div>

            <div className='input_field'>
            <label className='labels'>Workspace URL <p className="sub_label">(optional)</p></label>
            
            <input 
              className='text_box' 
              type="text" 
              onChange={handleWorkspaceURLChange}
              placeholder="www.eden.com/ Example"
            />
            </div>

        </form>
    </>
  );
};

export default FormStage2;

