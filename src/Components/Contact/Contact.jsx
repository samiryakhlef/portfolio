import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact() {

    //state pour récupérer l'input email
    const [stateInputEmail, setStateInputEmail] = useState();

    //state pour récupérer l'input name
    const [stateInputName, setStateInputName] = useState();

    //state pour récupérer l'input texte
    const [stateInputText, setStateInputText] = useState();

    //fonction getInput pour récupérer l'email
    const getInputEmail = e => {
        setStateInputEmail(e);
        console.log(e);
    }
    //fonction getInput pour récupérer le name
    const getInputName = e => {
        setStateInputName(e);
        console.log(e);
    }
    //fonction getInput pour récupérer le texte
    const getInputText = e => {
        setStateInputText(e);
        console.log(e);
    }

    return (
        <>
            <Link to="/contact"></Link>

            <form id="msform">
                <fieldset>
                    <h2 className="title"> Me contacter</h2>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"

                        // je récupère le state de l'input Email 
                        value={stateInputEmail}

                        // je récupère la fonction  pour récupérer la valeur de l'input
                        onInput={e => getInputEmail(e.target.value)} />

                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"

                        // je récupère le state de l'input Email 
                        value={stateInputName}

                        // je récupère la fonction  pour récupérer la valeur de l'input
                        onInput={e => getInputName(e.target.value)} />

                    <textarea
                        name="text"
                        id="text"
                        cols="20"
                        rows="5"
                        placeholder='Taper votre message...'

                        // je récupère le state de l'input Email 
                        value={stateInputText}

                        // je récupère la fonction  pour récupérer la valeur de l'input
                        onInput={e => getInputText(e.target.value)}></textarea>
                </fieldset>

                <button
                    className="submit action-button">
                    Envoyer</button>
            </form>


        </>
    )
}
