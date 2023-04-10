import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/index").then(
      (res) => res.json()
    ).then(
      (data) => {
        setData(data);
        console.log(data);
      }
    )
  }, [])

  const array = data.testKey
  // const nodes = array.map((item) => {
  //   <label>{item}</label>
  // })

  return (
    <div>
      <h1>Hello World!</h1>
      <h1>{array}</h1>
    </div>
  )
}

export default App;