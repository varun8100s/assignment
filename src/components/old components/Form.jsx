import React, {useState, useEffect} from "react";

const Dialogue = (props) => {

  const [userType, setUserType] = useState("myself");
  const [formData, setFormData] = useState({
    fullName:"Steve Jobs",
    displayName:"Steve",
    workspaceName:"Eden",
    workspaceUrl:"www.eden.com/ Example"
  })
  const [fullName, setFullName] = useState("Steve Jobs");
  const [displayName, setDisplayName] = useState("Steve");
  const [workspaceName, setWorkspaceName] = useState("Eden");
  const [workspaceUrl, setWorkspaceUrl] = useState("www.eden.com/ Example")
  
  let primaryLabel, secondaryLabel, primaryPlaceholder, secondaryPlaceholder;
  let renderForm = true;

  switch(props.stage) {
    case 1:
      primaryLabel="Full Name";
      secondaryLabel="Display Name"
      primaryPlaceholder=fullName;
      secondaryPlaceholder=displayName;
      break;
    case 2:
        primaryLabel="Workspace Name";
        secondaryLabel="Workspace URL(optional)";
        primaryPlaceholder=workspaceName;
        secondaryPlaceholder=workspaceUrl;
      break;
    case 3:
        renderForm=false;
  }


  return (
    renderForm ?

        <form className='form_center' onSubmit={props.handleSubmit}>
            <div className='input_field'> 
            <label className='labels'>{primaryLabel}</label>
            <input className='text_box' type="text" placeholder={primaryPlaceholder} />
            </div>
            
            <div className='input_field'>
            <label className='labels'>{secondaryLabel}</label>
            <input className='text_box' type="text" placeholder={secondaryPlaceholder}/>
            </div>

            
            <input className='submit_button' type="submit" value="Create Workspace"/>
        </form>

    :

    <div className="choice_container">
        <button className={userType==="myself"?"choice selected":"choice"} onClick={()=>setUserType("myself")}>
                <img src="images/myself.JPG" className="choice_logo"/>
                <h4>For myself</h4>
                <p className="choice_description">Write better. Think more clearly. Stay organized.</p>
                
        </button>
        <button className={userType==="team"?"choice selected":"choice"} onClick={()=>setUserType("team")}>
                <img src="images/team.JPG" className="choice_logo"/>
                <h4>With my team</h4>
                <p className="choice_description">Wikis, docs, tasks & projects, all in one place.</p>
        </button>
        <input className='submit_button' type="submit" value="Create Workspace" onClick={props.handleSubmit}/>
    </div>
    
  );
};

export default Dialogue;

