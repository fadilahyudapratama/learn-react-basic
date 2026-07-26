import {useState} from 'react';
import { useRef } from 'react';

function Form() {
    const [isEmail, setIsEmail] = useState(false);
    const [name, setName] = useState('');
    const emailRef = useRef();
    const [isFormLogin, setIsFormLogin] = useState(true);
    const [formData, setFormData] = useState({ email: "", password: "", name: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nama yang dimasukkan: ${name}`);
    }
    const handleEmailSubmit = (event) => {
        event.preventDefault();
        alert(`Email yang dimasukkan: ${emailRef.current.value}`);
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmits = (e) => {
        e.preventDefault();
        alert(`Username: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}`);
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
            <input type="text" name="name" placeholder="Masukkan Username" value={formData.name} onChange={handleChange} />
            <input type="password" name="password" placeholder="Masukkan Password" value={formData.password} onChange={handleChange} />
            <input type="email" name="email" placeholder="Masukkan Email" value={formData.email} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default Form;