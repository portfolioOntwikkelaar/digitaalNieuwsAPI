import React from 'react'
import { useGlobalContext } from "./context";

const Buttons = () => {
  const {isLoading, page,nbPages,handlePage}= useGlobalContext()
  return <div className="btn-container">
    <button disabled={isLoading} onClick={()=> handlePage('dev')}>vorige</button>
    <p>{page + 1} van {nbPages}</p>
    <button disabled={isLoading} onClick={()=> handlePage('inc')}>volgende</button>
  </div>
}

export default Buttons