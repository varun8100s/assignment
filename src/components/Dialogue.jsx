import React from "react";

const Dialogue = (props) => {
  
  let dialogue, subDialogue;

  switch(props.stage) {
    case 1:
      dialogue="Welcome! First things first...";
      subDialogue="You can always change them later."
      break;
    case 2:
      dialogue="Let's set up a home for all your work";
      subDialogue="You can always create another workspace later.";
      break;
    case 3:
      dialogue="How are you planning to use Eden?";
      subDialogue="We'll streamline your setup experience accordingly.";
      break;
    case 4:
      dialogue="Congratulations, Eren!";
      subDialogue="You have completed onboarding, you can start using Eden!";
    
  }
  return (
    <>
      {props.stage==4?<img src="/images/done.JPG" className="doneIcon"/>:<></>}
      <h2 className='headings'>{dialogue}</h2>
      <p className='sub_headings'>{subDialogue}</p>
    </>
  );
};

export default Dialogue;

