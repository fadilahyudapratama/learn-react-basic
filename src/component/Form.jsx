import {useState} from 'react';
import { useRef } from 'react';
import useForm from '../hooks/useForm';
function Form() {
    const [isEmail, setIsEmail] = useState(false);
    const [name, setName] = useState('');
    const emailRef = useRef();
    const [isFormLogin, setIsFormLogin] = useState(true);
    const {
    values,
    handleChange,
    resetForm,
    } = useForm({
    name: "",
    email: "",
    password: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nama yang dimasukkan: ${name}`);
    }
    const handleEmailSubmit = (event) => {
        event.preventDefault();
        alert(`Email yang dimasukkan: ${emailRef.current.value}`);
    }
    const handleSubmits = (e) => {
        e.preventDefault();
        alert(`Username: ${values.name}, Email: ${values.email}, Password: ${values.password}`);
        resetForm();
    };
    if (!isFormLogin) {
        return (
            <div>
                <button onClick={() => setIsEmail(false)}>Input Nama</button>
                <button onClick={() => setIsEmail(true)}>Input Email</button>
                <hr />
                {isEmail ? (
                    <form onSubmit={handleEmailSubmit}>
                        <input type="email" ref={emailRef} placeholder="Masukkan Email" />
                    </form>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama" />
                    </form>
                )}
            </div>
        )
    } else {
        return(
        <form onSubmit={handleSubmits}>
            <input type="text" name="name" placeholder="Masukkan Username" value={values.name} onChange={handleChange} />
            <input type="password" name="password" placeholder="Masukkan Password" value={values.password} onChange={handleChange} />
            <input type="email" name="email" placeholder="Masukkan Email" value={values.email} onChange={handleChange} />
            <button type="submit">Submits</button>
        </form>
        )
    }
}

export default Form;