import './CustomInput.css'
import emailIcon from '../../assets/svgs/icon-email.svg'
import passwordIcon from '../../assets/svgs/icon-password.svg'
import userIcon from '../../assets/svgs/icon-user.svg'
import eyeShowIcon from '../../assets/svgs/icon-eyes-show.svg'
import eyeHiddenIcon from '../../assets/svgs/icon-eyes-hidden.svg'
import { useState } from 'react'

export default function CustomInput({ text = 'Text', width = '300', value, password, onClick, error, onChange }) {


    const custominput_style = {
        width: `${width}px`,
        animation: `${error ? 'shake 300ms' : ''}`,
        border: `${error ? '1px solid red' : ''}`,
    };

    return (
        <>
            <main id="main-custominput" style={custominput_style}>
                <input required className='input-custominput' value={value} onChange={onChange} />
                <label htmlFor="email" className='label-custominput'>
                    <img src={userIcon} className='icon-custominput' />
                    {text}
                </label>
                <h1  className='eyes-custominput' onClick={onClick} >{password ? '>': '>'}</h1>
            </main>
        </>
    )
}