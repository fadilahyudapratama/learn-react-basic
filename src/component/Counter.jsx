import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["Belajar React", "Membuat Aplikasi", "Menyelesaikan Proyek"]);
    const addTodo = () => {
        setTodos([...todos, `Todo baru ${todos.length + 1}`]);
    }
    return (
        <div>
            <h2>Belajar useState terkait Penghitung Tasbih Online</h2>
            <p>
                Sebuah Penghitung Tasbih Digital Online. Tidak memerlukan unduhan. Gratis untuk dzikir harian Anda dari kenyamanan perangkat Anda.
                Penghitung Tasbih Online ini memiliki antarmuka yang sederhana dan mudah digunakan. Tekan tombol 'TAP' untuk menambah jumlah hitungan sebanyak satu setiap kali ditekan. Tombol 'kurangi' mengurangi jumlah hitungan sebanyak satu setiap kali ditekan. Tombol 'Reset' memungkinkan Anda untuk mereset jumlah hitungan, dan akan meminta konfirmasi Anda sebelum melakukan itu. Selain itu, penghitung secara otomatis menyimpan jumlah hitungan Anda di perangkat Anda. Ketika Anda meninggalkan dan kembali lagi nanti, ia akan melanjutkan penghitungan dari tempat Anda terakhir berhenti.
            </p>
            <strong>Jumlah Hitungan: {count}</strong>
            <br />
            <button onClick={() => setCount(count + 1)}>TAP</button>
            <button onClick={() => setCount(count - 1)}>Kurangi</button>
            <button onClick={() => {
                if (window.confirm("Apakah Anda yakin ingin mereset jumlah hitungan?")) {
                    setCount(0);
                }
            }}>Reset</button>

            <h2>Belajar useState untuk Todo List</h2>
            <h5>Daftar Tugas:</h5>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <button onClick={addTodo}>Tambah Todo</button>
        </div>
    )

}

export default Counter