import React from 'react';
import { Social } from '../../components/social/social';
import './contact.scss';
export const Contact = () => {

    window.onscroll = function() {myFunction()};

    function myFunction() {
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350 ||document.body.scrollTop < 550 || document.documentElement.scrollTop < 550     ) {
        document.getElementById("conatct").style.left ="0px";
      } else {
        document.getElementById("conatct").style.left ="-35px";
      }}
    return (

        <div id='conatct'>
            <Social />
        </div>
    )
}
