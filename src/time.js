import React,{ useState, useEffect } from 'react'
const Time = () => {
    const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      console.log('watching');
      setDateState(new Date());
    }, 30000);
  }, []);
  const [time, setTime] = React.useState("");

  React.useEffect(() => {

    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    }
  })

    return (  
        <h1>{time}</h1>
    );
}
 
export default Time;