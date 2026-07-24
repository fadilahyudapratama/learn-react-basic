import './App.css'
import Welcome from './component/Welcome';
import Header from './component/Header';

function App() {
  const name = "fadhilah Yuda Pratama";
  return (
    <div>
      <Header name="kim" age={25} />
      <h1>Hello {name}</h1>
      <p>Belajar JSX itu menyenangkan!</p>

      <Welcome />
    </div>
  )
}

export default App
