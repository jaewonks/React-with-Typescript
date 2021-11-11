import React, { useState } from 'react'
import './App.css'
import List from './components/List'
import AddToList from './components/AddToList'

// type definition
export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [ people, setPeople ] = useState<IState['people']>([
    {
      name: 'Fabio Montrone',
      url: '',
      age: 32,
      note: 'My lovely boyfried!'
    },
    {
      name: 'Sergio Navarro',
      url: '',
      age:27
    },
    {
      name: 'Anna boutard',
      url: '',
      age:27,
      note: 'She is going to Copenhagen for her business trip'
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
