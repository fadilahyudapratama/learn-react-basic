import { useState } from 'react';
import styled from 'styled-components';
import './App.css'
import gaya from "./App.module.css";
import { ProfileContext } from './component/ProfileContext'
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
import Memoization from './component/Memoization';
import useWindowWidth from './hooks/useWindowWidth';


function App() {
  const name = "fadhilah Yuda Pratama";
  const [user, setUser] = useState({
    name: "Fadhilah Yuda Pratama",
    age: 30,
    location: "Jakarta",
    email: "fadhilahyudapratamawork@gmail.com",
    description: "Seorang Frontend Developer",
    available: true,
    socialMedia: {
      twitter: "@fadhilahyuda",
      linkedin: "fadhilahyudapratama",
    },
  });
  const width = useWindowWidth();
  const Title = styled.h1`
    color: purple;
    text-decoration: underline;
  `
  return (
    <ProfileContext.Provider value={user}>
      <div>
        <Title>Ini Text Berwarna Ungu!</Title>
        <h2 className={gaya.titlev2}>Lebar Jendela { width }</h2>
        <Section>
          <h1 style={{color: "blue", fontSize: "24px" }}>Belajar JSX itu menyenangkan!</h1>
          <small className='title'>JSX adalah singkatan dari JavaScript XML. JSX adalah ekstensi sintaks untuk JavaScript. JSX memungkinkan kita untuk menulis HTML di dalam React.</small>
        </Section>
        <Section>
          <Welcome />
        </Section>
        <Section>
          <Header />
        </Section>
        <Section>
          <Profil />
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
        <Section>
          <Memoization />
        </Section>
      </div>
    </ProfileContext.Provider>
  )
}

export default App
