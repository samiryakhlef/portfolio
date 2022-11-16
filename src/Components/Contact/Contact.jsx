import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <Link to="/contact"></Link>

            <form id="msform">
                <fieldset>
                    <h2 className="title"> Me contacter</h2>
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="name" placeholder="Nom" />
                    <textarea name="" id="" cols="20" rows="5" placeholder='Taper votre message...'></textarea>
                </fieldset>
                <input type="submit" name="submit" class="submit action-button" value="Envoyer" />
            </form>


        </>
    )
}
