import './App.css'
import { useState } from 'react'
import ContactList from './Components/ContactList';
import ContactRow from './Components/ContactRow';
import SelectedContact from './Components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
      <SelectedContact 
        selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
      />)
      : (
      <ContactList 
        setSelectedContactId={setSelectedContactId}/>)}

      
    </>
  );
}


