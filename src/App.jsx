import './App.css'
import Header from './component/Header';

function Welcome(props) {
  return (
    <h1>Hallo, {props.name}</h1>
  )
}

function App() {
  const name = "fadhilah Yuda Pratama";
  return (
    <div>
      <Header />
      <h1>Hello {name}</h1>
      <p>Belajar JSX itu menyenangkan!</p>

      <Welcome name="Fadhilah Yuda Pratama" />
      <p>Ini halaman utama</p>
    </div>
  )
}

export default App
