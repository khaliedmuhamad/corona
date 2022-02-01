import React,{useState,useEffect} from'react';
import {symptomsIcons} from '../../components/graphics/icons.js';
import concat from '../../components/iconsaddarr/IconAddArr.js';
import Card from '../../components/CardOfThree/card.js';
export default function Symptoms(){

const [data, setData] = useState([
    {
        head:'Fever',
        paragraph:'High Fever – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.'
    },
    {
        head:'Dry cough',
        paragraph:'Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).'
    },
    {
        head:'Sore Throat',
        paragraph:'A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing.'
    },
])

useEffect(() => {
    setData(concat(data,symptomsIcons))
})
const intial = {
    height: '340px'
}
    return ( <>
    <Card mainHead='Symptoms of coronavirus' state={data} column='4' intial={intial}/>
    </>  ); 

}