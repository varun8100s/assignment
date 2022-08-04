import './App.css';
import React, { useState } from 'react';
import { StagesBar, Dialogue, Logo, FormStage1, FormStage2, FormStage3, ChangeStageButton} from './components';

function App() {
  const [stage, setStage] = useState(1);
  let MainContent;


  function changeStage(event) {
    event.preventDefault()
    setStage((currentStage)=>{
      if(currentStage<4)
        return ++currentStage;
      else 
        return 4;
    
    });
  }

  function launchEden(){
    window.location.reload(false);
  }

  switch(stage) {
    case 1:
      MainContent = <FormStage1 stage={stage} changeStage={changeStage} launchEden={launchEden}/>;
    break;
    case 2:
      MainContent = <FormStage2 stage={stage} changeStage={changeStage} launchEden={launchEden}/>;
    break;
    case 3:
      MainContent = <FormStage3 stage={stage} changeStage={changeStage} launchEden={launchEden}/>;
    break;
    case 4:
    break;
  }

  return (
    <div className="App">
      <Logo/>
      <StagesBar stage={stage}/>
      <Dialogue stage={stage}/>
      
      {MainContent}
      <ChangeStageButton stage={stage} changeStage={changeStage} launchEden={launchEden}/>
      
      
    </div>
  );
}

export default App;
