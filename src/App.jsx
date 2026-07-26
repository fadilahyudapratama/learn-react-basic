// import './App.css'
import Welcome from './component/Welcome';
import Header from './component/Header';
import Profil from './component/Profil';
import Counter from './component/Counter';
import Eventhandling from './component/Eventhandling';
import Section from './component/Section';
import ConditionalRendering from './component/ConditionalRendering';
import ListKeys from './component/ListKeys';
import Form from './component/Form';
import UseEffect from './component/UseEffect';
import UseRef from './component/UseRef';

function App() {
  const name = "fadhilah Yuda Pratama";

  return (
    <div>
      <Section>
        <h1>Belajar JSX itu menyenangkan!</h1>
        <small>JSX adalah singkatan dari JavaScript XML. JSX adalah ekstensi sintaks untuk JavaScript. JSX memungkinkan kita untuk menulis HTML di dalam React.</small>
      </Section>
      <Section>
        <Welcome />
      </Section>
      <Section>
        <Header />
      </Section>
      <Section>
        <Profil name="Fadhilah Yuda Pratama" age={30} location="Jakarta" email="fadhilahyudapratama@example.com" description="Seorang developer yang senang belajar teknologi baru." available={true} socialMedia={{ twitter: "@fadhilahyuda", linkedin: "fadhilahyudapratama" }}  />
      </Section>
      <Section>
        <Counter />
      </Section>
      <Section>
        <Eventhandling />
      </Section>
      <Section>
        <ConditionalRendering />
      </Section>
      <Section>
        <ListKeys />
      </Section>
      <Section>
        <Form />
      </Section>
      <Section>
        <UseEffect />
      </Section>
      <Section>
        <UseRef />
      </Section>
    </div>
  )
}

export default App
