 import React, {useState} from 'react';
 import ChatBot from 'react-simple-chatbot';


 import { ThemeProvider } from 'styled-components';
function BotResume(props){
  const [bioData, setBioData] = useState([{ text: 'Learn Hooks' }]);

  const fetchAnother = (title) =>{
    let my_content=""
    fetch('/api/mongodb/blogposts/?title=' + title)
        .then(response => response.json())
        .then(data => {
          console.log('Got my sec function back', data);
          my_content = data[0].text
 
  localStorage.setItem('rememberMeAgain', my_content);        
  

 // console.log("mycontete", {my_sec_content})
  
        });
  return localStorage.getItem('rememberMeAgain');
  }
const [mySpecificValue, setMySpecificValue]= useState("defaul_message")
  let message = "my message"
 const steps =[
    {
      id: 'hello-world',
      message: message,
      trigger: "get_val",
    },
    {
      id:'get_val',
      component: <FetchSpecificPost title ="friend"/>,
      //waitAction:true,
      trigger :'get_val2'

    },
  
    {
      id:'get_val2',
      message: fetchAnother("friend") ,
      end: true
     }
  ] ;
  
  function FetchSpecificPost(props){
    let title = props.title
    const [my_sec_content, setmy_sec_content]=useState("");
    let my_content="";
    console.log('TODO: Getting specific value for',  title);
    fetch('/api/mongodb/blogposts/?title=' + title)
        .then(response => response.json())
        .then(data => {
          console.log('Got thisvvvvvvvvvvvvvv back', data);
          my_content = data[0].text
  setmy_sec_content(my_content);
  localStorage.setItem('rememberMe', my_content);        
  

  console.log("mycontete", {my_sec_content})
  
        });
        console.log("my specific value", my_sec_content);
        console.log("gone for goog",localStorage.getItem('rememberMe'))
      return (<div>Waiting {my_sec_content}</div>) ; 
  }
  const theme = {
    background: '#fff',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
    
  };
const width = "100%";

  
const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} width={width} />;
  </ThemeProvider>
);

// return <ThemeProvider theme={theme}>
// <ChatBot steps={steps} />
// </ThemeProvider> 
return ThemedExample()
}
export default BotResume;






// all available props





