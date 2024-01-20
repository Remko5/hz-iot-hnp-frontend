function Message({message}) {
  let displayMessage = []
  if(message instanceof Array){
    message.forEach(element =>{
        displayMessage.push(<div key={element}>{element}</div>)
    });
  }
  else{
    const keys = Object.keys(message)
    keys.forEach(element => {
        displayMessage.push(<div key={element}>{element}: {message[element]}</div>)
    });
  }

  return(<>{displayMessage}</>)
}

export default Message