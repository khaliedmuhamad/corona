import './statistics.scss';
import React,{useState} from 'react';
import Status from '../status/Status.js'
export default function Statistics(){
    const [scope] = useState('all')
    return (
        <div className='statistics '>
            <div className='container row'>
               <Status scope={scope}  />
        </div>
        </div>
   
    )
}