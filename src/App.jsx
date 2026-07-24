import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "fadhilah Yuda Pratama";
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Belajar JSX itu menyenangkan!</p>
    </div>
  )
}

export default App
