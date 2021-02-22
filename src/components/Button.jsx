import React from 'react';
import './Button.style.css'


export const Button = (props) =>{

    const onclick = () =>{
        alert("Klikket på meg du gjorde!")
    }


    return <div className='button' onClick={onclick}>Legg til timer</div>
}