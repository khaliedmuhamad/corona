import Nav from '../../components/navBar/Nav.js';
import React from 'react';
import Coronaium from '../../components/coronum/Coronium.js';
import './Header.scss';
import './ResponiveHeaderTest.scss';
import { headSvgs} from '../../components/graphics/headSvgs.js';

export default function Header() {
    return  <>
    <header>
     <div className="coronaium" >   
    <Coronaium />
    </div>
    <div className='container'>
    <div className='row res sm-text-center flex-md-row flex-lg-row flex-column-reverse justify-content-center'>
        <div className='conversation col-lg-6 col-md-7 col-12'>
            <h2 className='head'>COVID-19 Live Tracker</h2>
            <span className='head-coronaium'>
                {headSvgs[0]}
            </span>
            <p className='head-paragraph'>
            The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.
            </p>
            <button className='btn protect'>
                How to Protect <span className='btn-icon'>{headSvgs[1]}</span>
            </button>
            <button className='btn doc'>find a doctor
            {headSvgs[1]}
            </button>
        </div>
        <div className='col-lg-4 col-md-5 col-10'>
        {headSvgs[2]}
        </div>
    </div>
    </div> 
</header>
        </>

    
        
}