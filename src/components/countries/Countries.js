import './Countries.scss';
import React, {useState , useEffect} from 'react';
import options from '../../api/api.js';
import axios from 'axios';
import Status from '../status/Status.js';

export default function Countries(){

const [countries,setCountries] = useState([
    {
        name:'Usa',
    },
    {
        name:'Brazil',    
    },
    {
        name:'India',   
    },
    {
        name:'France',
    },
    {
        name:'Russia',
    },
    {
        name:'UK',
    }
    ]);

let num;
    useEffect(() => {
 
 },) 
 window.onload = () => {
   
    countries.forEach( item => {
    options.params.country = item.name;
    axios.request(options)
    .then(res => {
        const respo = res.data.response[0];
        item.num = respo.cases.total;
        setCountries([...countries])
    }).catch(err =>{
        console.log(err)
    })
})

 } 
 const [arr,setArr] = useState([{name:'',result:0,num}]);  
     return <div className='Countries'>
        <div className='result-card global'>
                    <div className='countary'>Global</div>
                    <div className='result'>14 M</div>
                </div>
                <hr className='line' />
                <div className='row justify-content-between'>
                {countries.map((el,n) =>        
                <div className='col-lg-12 col-md-6 p-0' key={n}>
                    <div className='result-card m-md-3'>
                    <div className='flag'><img src={`svg/${el.name}.svg`} alt={el.name} /></div>
                    <div className='countary'>{el.name}</div>
                    <div className='result'>{el.num}</div>
                </div>
                </div>)}</div>
            </div>
}  