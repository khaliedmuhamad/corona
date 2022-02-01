import './showResult.scss';
import './showResultRes.scss';
import React,{useState} from 'react';
import Status from '../status/Status.js';


export default function ShowResult(props) {

    const [scope] = useState(props.data)
    const countary = scope.toLowerCase();
    return <div className='showresult'>
        <div className='container'>
        <div className='countary'>
        
        <h1 className='countary-name text-upper'>Countary:
        <img src={`svg/${countary}.svg`} alt={scope} className='countary-flag'/>
         <span>{countary.toUpperCase()}</span> </h1>
        </div>
        <div className='results row flex-lg-row flex-column fledx-md-row'>
        <Status scope={scope} />
        </div>

        </div>      
        </div>
    
}





