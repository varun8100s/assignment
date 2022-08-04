import React, {useState, useEffect} from "react";

const FormStage3 = (props) => {

    const [userType, setUserType] = useState("myself");

  return (
    <>
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
        
    </div>
    </>
  );
};

export default FormStage3;

