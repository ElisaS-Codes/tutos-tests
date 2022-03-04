import { useState } from 'react'

const Person = ({name}) => (
  <li>{name}</li>
)

const List = ({persons}) => (
  <ul>
    {persons.map((person) => 
      <Person key={person.name} name={person.name} />
    )}
  </ul>
)


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleOnSubmit = (event) => {
    event.preventDefault()

    if(){
      alert("Name is already in the phonebook")
      return
    }

    setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <List persons={persons} />
    </div>
  )
}

export default App