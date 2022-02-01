import React,{useState,useEffect} from'react';
import {protectIcons} from '../../components/graphics/icons.js';
import concat from '../../components/iconsaddarr/IconAddArr.js';
import Card from '../../components/CardOfThree/card.js';
export default function Protect(){

const [data, setData] = useState([
    {
        head:'Wash your hands regularly with soap',
        paragraph:'Handwashing is one of the best ways to protect yourself and your family from getting sick. Learn when and how you should wash your hands to stay healthy.'
    },
    {
        head:'Stay home if you feel unwell.',
        paragraph:'Most people with COVID-19 have mild illness and are able to recover at home without medical care. Do not leave your home, except to get medical care. '
    },
    {
        head:'Avoid touching your face.',
        paragraph:'To help prevent infections, keep your hands away from your eyes, nose, and mouth. Why? Touching the mucous membranes on your face.'
    },
    {
        head:'Cover your mouth and nose',
        paragraph:"Cover your mouth and nose with a tissue when you cough or sneeze. Put your used tissue in a waste basket. If you don't have a tissue, cough or sneeze into your."
    },
])

useEffect(() => {
    setData(concat(data,protectIcons))
})
const intial = {
    background:'none',
    boxShadow:'none',
    minHeight: '300px'

}

    return ( <>
    <Card mainHead='Symptoms of coronavirus' state={data} column='3' align='left' intial={intial} />
    </>  ); 

}