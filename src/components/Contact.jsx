import React from 'react'
import Form from "./Form";
import Card from './Card';
import '../style/contact.css'



export default function Contact() {
    return (
        <div className='col-12 contact_block d-xl-flex d-block'>
            <Form />
            <Card />
        </div>
    )
}
