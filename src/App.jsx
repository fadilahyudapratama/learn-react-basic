// import './App.css'
import Welcome from './component/Welcome';
import Header from './component/Header';
import Biodata from './component/Biodata';

function App() {
  const name = "fadhilah Yuda Pratama";
  return (
    <div>
      <h1>Belajar JSX itu menyenangkan!</h1>
      <small>JSX adalah singkatan dari JavaScript XML. JSX adalah ekstensi sintaks untuk JavaScript. JSX memungkinkan kita untuk menulis HTML di dalam React.</small>
    <br />
    <br />
    <br />
    <hr />

      <Header />
      <br />
      <br />
      <br />
      <hr />
      
      <Biodata nama="Fadhilah Yuda Pratama" umur={30} alamat="Jakarta" />
      <br />
      <br />
      <br />
      <hr />
      <Welcome />
    </div>
  )
}

export default App
