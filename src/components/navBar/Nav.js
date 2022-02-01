import  './Nav.scss';
import React,{useState} from 'react';
import {headSvgs} from "../graphics/headSvgs.js";
function Nav () {
  const burger = [<svg  fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>,
<svg class='open' fill="#aff00" class='svg2' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">
  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/>
</svg>]
 
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
    return  <>
       <nav class="navbar navbar-expand-lg navbar-light navbar-right">
  <div class="container">
  <a class="navbar-brand" href="#Home">
  {headSvgs[3]}
                            </a>
                            <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        {!isNavCollapsed ? burger[0] : burger[1]}
      </button>
      <div class={`${isNavCollapsed ? 'collapse' : 'collapsed'} navbar-collapse`} id="navbarsExample09">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Results</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Exterior</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Interior</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
        </>
    
}
export default Nav;