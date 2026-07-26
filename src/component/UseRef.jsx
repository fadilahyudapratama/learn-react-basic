import { useState, useRef, useEffect } from "react";

function UseRef() {
    const inputRef = useRef();
    const [count, setCount ] = useState(0);
    const renderCount = useRef(0);
    const prevCount = useRef();

    renderCount.current += 5;
    const focusInput = () => {
        inputRef.current.focus();
    };

    useEffect(() => {
        prevCount.current = count;
    }, [count])

    return (
        <div>
            <h2>Contoh useRef untuk mengakses DOM</h2>
            <input type="text" ref={inputRef} placeholder="Ketik sesuatu..." />
            <button onClick={focusInput}>Fokus ke Input</button>

            <h2>Contoh useRef untuk Menyimpan Nilai Tanpa Rerender</h2>
            <p><strong>Count: {count}</strong></p>
            <p>Component re render sebanyak {renderCount.current} kali</p>

            <h2>Contoh useRef untuk menyimpan data sebelumnya</h2>
            <p><strong>Count Sekarang: {count} </strong></p>
            <p><strong>Count sebelumnya: {prevCount.current} </strong></p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    );
}

export default UseRef;