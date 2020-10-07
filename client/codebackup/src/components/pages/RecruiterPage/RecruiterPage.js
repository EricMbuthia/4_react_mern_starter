// import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom'
// import './RecruiterPage.css';
// // import BotResume from '../BotResume/BotResume.js';
// import BotImage from './Susanbot_2.png';
// import ChatBot from 'react-simple-chatbot';


// // import { ThemeProvider } from 'styled-components';


// function RecruiterPage(props) {
//   const firstLast = 'Susana\'s';
//   const topSkills = 'React, Python, and Javasctipt';
//   const contactInfo = '555-555-5555';


//   const [yearsExperience, setYearsExperience] = useState('5');
//   const [name, setName] = useState("default |Name")

//   function getData() {
//     console.log('Fetching data from API');
//     fetch('/api/mongodb/usersData/')
//       .then(response => response.json())
//       .then(data => {

//         console.log('Got data back', data);
//         // setYearsExperience(data);
//         setName(data[0].name)


//       });
//   }
//   useEffect(getData, []);



//   useEffect(() => {
//     console.log(" log-2 yearsExperience changed to:", yearsExperience)
//   }, [yearsExperience])

//   function YourName(props) {
//     return (
//     <div>Hi there, welcome to {name} resume chatbot!</div>
//     );
//   }
//   console.log('log-3 outside any function experience: ', yearsExperience)

//   function Experience(props) {
//     console.log(' log-4 inside function experience: ', props.yearsExperience)
//       return (
//       <div>I have {props.yearsExperience} years experience as a senior developer for Faceboop!</div>
//    );
//   }

//   function Skills(props) {
//     return (
//     <div>My topskills are {topSkills} !</div>
//     );
//   }

//   function Contact(props) {
//     return (
//     <div>Please contact me at {contactInfo} !</div>
//     );
//   }



//     const steps = [
//       {
//         id: 'greeting',
//         component: < YourName />,
//         asMessage: true,
//         trigger: '2',

//       },
//       {
//         id: '2',
//         message: 'Would you like to know about my work experience?',
//         trigger: 'yesno',

//       },
//       {
//         id: 'yesno',
//         options: [
//           {value: 'yes', label: 'Yes', trigger: 'q-experience' },
//           {value: 'no', label: 'Maybe Later', trigger: 'end-message'},
//         ],
//       },
//       {
//         id: 'q-experience',
//         component: < Experience yearsExperience={yearsExperience}/>,
//         asMessage: true,
//         trigger: 'q-skills'
//       },
//       { 
//         id: 'q-skills',
//         message: 'Would you like to know my TOP skills',
//         trigger: 'yesno-skills',
//       },
//       {
//         id: 'yesno-skills',
//         options: [
//           {value: 'yes', label: 'Yes', trigger: 'skills' },
//           {value: 'no', label: 'Maybe Later', trigger: 'end-message' },
//         ],
//       },
//       {
//         id: 'skills',
//         component: < Skills />,
//         asMessage: true,
//         trigger: 'q-hire'
//       },
//       { 
//         id: 'q-hire',
//         message: 'Are you ready to hire me',
//         trigger: 'yesno-hire',
//       },
//       {
//         id: 'yesno-hire',
//         options: [
//           {value: 'yes', label: 'Yes', trigger: 'contact' },
//           {value: 'no', label: 'Maybe Later', trigger: 'end-message' },
//         ],
//       },
//       {
//         id: 'contact',
//         component: < Contact />,
//         asMessage: true,
//         trigger: 'end-message-hired'
//       },
//       {
//         id: 'end-message-hired',
//         message: 'Thanks for your time! I look foward to a rewarding career with your company!',
//         trigger: 'startover',
//       },
//       {
//         id: 'end-message',
//         message: 'Thanks for your time! Hope you have a wonderful life!',
//         trigger: 'startover',
//       },
//       {
//         id: 'startover',
//         options: [
//           {value: 'yes', label: 'Start Over', trigger: 'greeting' },
//         ],
//       },

//     ];


//   return (
//     <div className="LandingPage">

//    <div className="LandingPageHeading">
//   {/* <img src={BotImage} className="BotImage" alt="BotLogo" />  */}
//   {/* <div className="speech-bubble">Text</div> */}
//     </div>
//     {/* <div className="Separator">




//     </div> */}

//      <div className="BotDesign">

//         <ChatBot 
//         headerTitle="My Excellent Resume Chatbot"
//         // speechSynthesis={{ enable: true, lang: 'en' }}
//         steps={steps}/>
//        </div>
//     </div>
//   );

// }


// export default RecruiterPage;








// {/* <ChatBot 
//         {allDataIsReady() ? <ChatBot 
//         headerTitle="My Excellent Resume Chatbot"
//         // speechSynthesis={{ enable: true, lang: 'en' }}
//         steps={steps}/>
//         steps={steps}/> : null}
//        </div>
//     </div>
//   ); */}




import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import './RecruiterPage.css';
//import BotResume from '../BotResume/BotResume.js';
import BotImage from './Susanbot_2.png';
import ChatBot from 'react-simple-chatbot';


// import { ThemeProvider } from 'styled-components';



function Recruiter(props) {
  const firstLast = 'Susana\'s';
  const topSkills = 'React, Python, and Javasctipt';
  const contactInfo = '555-555-5555';
//const topSkills = 'React, Python, and Javasctipt';
//const contactInfo = '555-555-5555';
//const [name, setName] = useState(null);
const [myDetails, setMyDetails] = useState({
  name:null,
  age:"defauage",
  gender: "default gender",
  
  ed1: "default ed1",
  ed2: "default ed2",
  ed3: "default ed3"
});

const [yearsExperience, setYearsExperience] = useState(null); 
const steps = [
  {
    id: 'greeting',
    component: < YourName />,
    asMessage: true,
    trigger: 'age',

  },
  {
    id: 'age',
    component: <Age />,
    asMessage: true,
    trigger: 'gender',

  },
  {
    id: 'gender',
    component: <Gender />,
    asMessage: true,
    trigger: 'education1',

  },
  {
    id: 'education1',
    component: <Education1 />,
    asMessage: true,
    trigger: 'education2',

  },
  {
    id: 'education2',
    component: <Education2 />,
    asMessage: true,
    trigger: 'education3',

  },
  {
    id: 'education3',
    component: <Education3 />,
    asMessage: true,
    trigger: 'end-message-hired',

  },
  {
    id: 'end-message-hired',
    message: 'Thanks for your time! I look foward to a rewarding career with your company!',
    trigger: 'startover',
  },
  {
    id: 'end-message',
    message: 'Thanks for your time! Hope you have a wonderful life!',
    trigger: 'startover',
  },
  {
    id: 'startover',
    options: [
      {value: 'yes', label: 'Start Over', trigger: 'greeting' },
    ],
  },

];

//const [yearsExperience, setYearsExperience] = useState('5');

function Age(props) {
  return (
  <div> I am  {myDetails.age} years old.</div>
  );
}

function Gender(props) {
  return (
  <div>I am {myDetails.gender}</div>
  );
}
function Education1(props) {
  return (
  <div>I am a {myDetails.ed1} holder!</div>
  );
}
function Education2(props) {
  return (
    
  <div>I am in the {myDetails.ed2} field!</div>

  );
}
function Education3(props) {
  return (
  <div>My specialty being {myDetails.ed3}.</div>
  );
}
function getData() {
console.log('Fetching data from API');
fetch('/api/mongodb/usersData/')
.then(response => response.json())
.then(data => {

console.log('Got data back', data);
// setYearsExperience(data);
console.log('Got data back', data);
//setName(data[0].name);
setMyDetails(
  {
      ...myDetails,
      name: data[96].name,
      gender: data[96].gender,
      age: data[96].age,
      
      ed1: data[96].ed1,
      ed2: data[96].ed2,
      ed3: data[96].ed3,
  }
);

});}



// useEffect(() => {
//   console.log(" log-2 yearsExperience changed to:", yearsExperience)
// }, [yearsExperience]);
useEffect(() =>{
  console.log(" log-2 name:", myDetails.name)
}, [myDetails.name]);

function YourName(props) {
  return (
    <div>
  <div>Hi there, welcome to {firstLast} resume chatbot!</div>
  <div>Hi there, welcome to {myDetails.name} resume chatbot!</div>
  </div>
  );
}
console.log('log-3 outside any function experience: ', yearsExperience)
// console.log('log-3 outside any function experience: ', yearsExperience)

function Experience(props) {
  console.log(' log-4 inside function experience: ', props.yearsExperience)
  // console.log(' log-4 inside function experience: ', props.yearsExperience)
    return (
    <div>I have {props.yearsExperience} years experience as a senior developer for Faceboop!</div>
 );

    };
  

function allDataIsReady(){
  getData();
  console.log("age ", myDetails.ed3)
return myDetails.name //&& yearsExperience
}
//useEffect(getData(),[name]);
return (
<div className="LandingPage" style ={{overflow : 'scroll'}}>

{/* <div className="BotDesign"> */}

{allDataIsReady() ? <ChatBot
headerTitle="My Excellent Resume Chatbot"
// speechSynthesis={{ enable: true, lang: 'en' }}
steps={steps}/>
: null} 
{/* <ChatBot
headerTitle="My Excellent Resume Chatbot"
// speechSynthesis={{ enable: true, lang: 'en' }}
steps={steps}/> } */}

{/* // </div> */}
</div>
);
}

export default Recruiter;

//export default Recruiter;