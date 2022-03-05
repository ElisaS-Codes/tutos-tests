import { useState, useEffect } from 'react'
import axios from 'axios'

const Person = ({name, phone}) => (
  <li>{name} - {phone}</li>
)

const List = ({persons}) => (
  <div>
    <h2>Numbers</h2>
    <ul>
      {persons.map((person) => 
        <Person key={person.name} name={person.name} phone={person.number} />
      )}
    </ul>
  </div>
)

const Search = ({newSearch, setNewSearch }) => {
  const handleSearchChange = (event) => setNewSearch(event.target.value)
  return (
    <div>
      <h1>Search:</h1>
      <input value={newSearch} onChange={handleSearchChange} />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)
  const handleOnSubmit = (event) => {
    event.preventDefault()

    if(!newName){
      alert(`Cant have a blank name`)
      return
    }

    if(!newPhone){
      alert(`Cant have a blank phone`)
      return
    }

    if(persons.some((i) => i.name == newName)){
      alert(`${newName} is already in the phonebook`)
      return
    }

    setPersons(persons.concat({name: newName, number: newPhone}))
    setNewName('')
    setNewPhone('')
  }

  useEffect(() => {
      axios.get('http://localhost:3001/persons')
           .then(response => setPersons(response.data))
  },[])

  let personsShown = []
  if(newSearch == '') personsShown = persons
  else personsShown = persons.filter(
      (person) => person.name.toUpperCase().search(newSearch.toUpperCase()) > -1
  )

  return (
    <div>
      <Search newSearch={newSearch} setNewSearch={setNewSearch} />
      <h2>Phonebook</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <List persons={personsShown} search={newSearch} />
    </div>
  )
}

export default App