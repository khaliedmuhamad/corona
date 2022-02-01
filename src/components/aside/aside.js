import './asied.scss';
import React from 'react';
import SeaechRegion from '../seaechregion/SeaechRegion.js';
import Countries from '../countries/Countries.js';
export default function Aside(){

    return <div className='aside' >
       
            <SeaechRegion />
            <Countries />
        </div>
}  