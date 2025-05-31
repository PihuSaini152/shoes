import React from 'react'
import './search.css'
import { IoSearchSharp } from "react-icons/io5";
import Search_card from './search_card';

function search() {
  return (
    <>
    <div className="search-main">
 <div className="search-card">
  <h1 className='serch_hadding1'>Search Result </h1>
  <IoSearchSharp className='SearchSharp-icon'/>
 <input type="search" placeholder= 'Enter Search Term...' className='serch_input'/>
 </div>
    </div>
    <Search_card/>
   
     
    </>
  )
}

export default search
