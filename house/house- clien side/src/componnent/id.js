
import React  from 'react';
import {Link, useLocation} from 'react-router-dom';
//componnent to display the house id after create
export default function Id() {
  const location = useLocation();
  return (
    <div>
      <h2>
        House ID:{location.state.id}
      </h2> 
      <Link to="/details"state={{id:location.state.id}}>nevigate to:{location.state.id}
      </Link>
    </div>);
  }