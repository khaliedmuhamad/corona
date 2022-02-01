import React from 'react';
import './SeaechRegion.scss';
import ShowResult from '../showResult/ShowResult.js';
import { FaRegTimesCircle,FaSearchLocation } from "react-icons/fa";
import  { useState } from 'react';
   
 
export default function SeaechRegion(){
const [val,setVal] = useState('');
const [loading,setLoding] = useState(false);

const search = async e => {
    if(e.key ===  'Enter'){
            setLoding(true);
    }}
    
        

const handelSearch = (e) => setVal(e.target.value);

return (<div className='SeaechRegion' id='SeaechRegion'>
    
                <input type='text' value={val} onChange={handelSearch} onKeyPress={search} className='search' placeholder='Filter to a location'  />
                <div className='search-icon btn' onClick={ () =>setLoding(true)}>
                <FaSearchLocation size="70" /> 
                               </div>
                { loading ? <div>
                   
                    <div className='show'>
                    <div className='close btn btn-danger' onClick={ () =>setLoding(false)}>
                    <FaRegTimesCircle size="70" />
                        
                        </div>
                        <ShowResult data={val} />

                    </div>
                </div> : '' }
            </div>)
}  