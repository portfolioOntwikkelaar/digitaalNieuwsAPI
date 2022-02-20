import React from 'react'
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {query, handleSearch}= useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" className="form-input" value={query}/>
      
    </form>
  )
}

export default SearchForm