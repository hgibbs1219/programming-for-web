import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SimpleCard from './SimpleCard'


function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <SimpleCard title="Hello Card!" content="This is my first card!" />
      <h2>Here is my Footer! 😀</h2>
    </div>
  );
}

export default App;