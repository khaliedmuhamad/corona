import React,{useState,useEffect} from'react';
import {spreadIcons} from '../../components/graphics/icons.js';
import concat from '../../components/iconsaddarr/IconAddArr.js';
import Card from '../../components/CardOfThree/card.js';
export default function Spread(){

const [data, setData] = useState([
    {
        head:'Person-to-person spread',
        paragraph:'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.'
    },
    {
        head:'Person coughs or sneezes',
        paragraph:'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.'
    },
    {
        head:'Sore Throat',
        paragraph:'A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing.'
    },
])

useEffect(() => {
    setData(concat(data,spreadIcons))
})

    return ( <>
    <Card mainHead='How coronavirus spread' state={data} column='4' />
    </>  ); 

}