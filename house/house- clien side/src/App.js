
import React from 'react';
import Create_New_House from './componnent/create_new_house';
import Details from './componnent/details'
import Update from './componnent/update'
import {Link, Routes, Route} from 'react-router-dom';
import Id from'./componnent/id'

export default function Example() {
  return (
    <div>
       <Link to="/house">Create new House</Link>
        <Routes>
          <Route path="/id" element={<Id />} />
          <Route path="/house" element={<Create_New_House />} />
          <Route path="/details" element={<Details />} />
          <Route path="/update" element={<Update />} />
        </Routes>
    </div>
  )  
}
