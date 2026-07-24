// import './App.css'
import Welcome from './component/Welcome';
import Header from './component/Header';
import Profil from './component/Profil';

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
      
      <Profil name="Fadhilah Yuda Pratama" age={30} location="Jakarta" email="fadhilahyudapratama@example.com" description="Seorang developer yang senang belajar teknologi baru." available={true} socialMedia={{ twitter: "@fadhilahyuda", linkedin: "fadhilahyudapratama" }}  />
      <br />
      <br />
      <br />
      <hr />
      <Welcome />
    </div>
  )
}

export default App
