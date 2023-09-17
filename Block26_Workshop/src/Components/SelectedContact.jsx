import { useState, useEffect } from "react";

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchSelectedContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const contact = await response.json();
                setContact(contact);
                console.log(contact)
            } catch (error) {
                setError(error);
            }
        }
        fetchSelectedContact();
    }, []);

    return (
        <>
            {contact && (
            <div>
                <h4>Name:</h4>
                {contact.name}
                <h5>Email:</h5>
                {contact.email}
                <h5>Company</h5>
                {contact.company.name}
                <h5>Phone:</h5>
                {contact.phone}
                <h5>City:</h5>
                {contact.address.city}
                <h5>Zipcode</h5>
                {contact.address.zipcode}
    
            </div>
            )}
            
            <br/>
        
            <button onClick={() => {
                setSelectedContactId(null)
            }}>Back</button>
        </>
    );
    };