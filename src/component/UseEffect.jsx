import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);

    // useEffect tanpa depedencies
    useEffect(() => {
        console.log("useEffect tanpa depedencies!");
    })

    // useEffect dengan array kosong
    useEffect(() => {
        console.log("useEffect dengan array kosong!");
    }, []);

    // useEffect dengan depedencies
    useEffect(() => {
        console.log("useEffect dengan depedencies!");
    }, [count])

    useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval berjalan...");
    }, 1000);

    // cleanup: dijalankan ketika component di-unmount
    return () => {
      clearInterval(interval);
      console.log("Interval dihentikan");
    };
  }, []);

    return (
        <div>
            <h2>Contoh Penggunaan useEffect tanpa defedencies</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    )
}

export default UseEffect;