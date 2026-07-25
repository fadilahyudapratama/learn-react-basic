function Eventhandling() {
    const handleClick = () => {
        alert("Tombil telah diklik!");
    }

    return (
        <div>
            <h2>Belajar Event Handling</h2>
            <button onClick={handleClick}>Klik Saya</button>
        </div>
    )
}

export default Eventhandling