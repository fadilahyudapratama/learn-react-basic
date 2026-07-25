import {useState} from "react";

function Eventhandling() {
    const handleClick = () => {
        alert("Tombil telah diklik!");
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        alert(`Nama: ${name}, Email: ${email}, Password: ${password}`);
    }
    const handleChange = event => {
        setName(event.target.value);
    }
    return (
        <div>
            <h2>Belajar Event Handling</h2>
            <button onClick={handleClick} className="btn btn-primary" style={{ marginBottom: "2px" }}>
                Klik Saya
            </button>

            <h2>Belajar Event Handling untuk Input</h2>
            <input type="text" placeholder="Masukkan nama Anda" onChange={handleChange} />
            <p>Nama Anda: {name}</p>

            <h2>Belajar Event handling untuk Form input</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="masukan Username Anda" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="password" placeholder="Masukan Password Anda" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="email" placeholder="Masukan Email Anda" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
            <button type="submit" className="btn btn-success">
                Submit
            </button>
            </form>
        </div>
    )
}

export default Eventhandling