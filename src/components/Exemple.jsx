import React, { useState } from 'react'
import { IconName } from "react-icons/fi";

export default function Exemple() {

    const [compteur, setCompteur] = useState(6)
    const [person, setPerson] = useState({name:'assas', age:22})
    const [Array, setArray] = useState([1,3,8,5,6])

  return (
    <div>
        <h1>Personne : {person.name} - {person.age}</h1>
        <button onClick={() => setCompteur(c => c+1)}>+</button>
        <button onClick={() => setCompteur(compteur-1)}>-</button>
        <button onClick={() => setPerson(p => {return {...p, ooo:'rrrrr'}})}>Change person</button>
        <button onClick={() => setArray(array => array.slice(0, array.length-1))}>Change person</button>
    </div>
  )
}
