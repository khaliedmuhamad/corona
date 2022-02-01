import React from 'react';

  
export default function concat(a,b){
    a.forEach((el ,n) => {
      el.icon = b[n] })
    return a;
  }