import React from 'react'
import { useGlobalContext } from "./context";

const Stories = () => {
  const {isLoading} = useGlobalContext();
  if(isLoading){
    console.log(isLoading);
    return <div className='loading'></div>
  }
  return (
    <h1>
      Stories cmpp
    </h1>
  )
}

export default Stories