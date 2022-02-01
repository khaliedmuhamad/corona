import React from 'react';
import './SeaechRegion.scss';
import ShowResult from '../showResult/ShowResult.js';
import  { useState } from 'react';
   
 
export default function SeaechRegion(){
const [val,setVal] = useState('');
const [loading,setLoding] = useState(false);

const search = async e => {
    if(e.key ===  'Enter'){
            setLoding(true);
    }}
    
        

const handelSearch = (e) => setVal(e.target.value);

return (<div className='SeaechRegion'>
    
                <input type='text' value={val} onChange={handelSearch} onKeyPress={search} className='search' placeholder='Filter to a location'  />
                <div className='search-icon btn' onClick={ () =>setLoding(true)}>
                    <i class="fas fa-search-location fa-2x"  ></i>
                </div>
                { loading ? <div>
                   
                    <div className='show'>
                    <div className='close btn btn-danger' onClick={ () =>setLoding(false)}><i class="fas fa-times fa-2x"></i></div>
                        <ShowResult data={val} />

                    </div>
                </div> : '' }
            </div>)
}  