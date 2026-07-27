import React, { useCallback, useMemo, useState } from "react";

const Child = React.memo(({ name }) =>{
    console.log('Render Child');
    return <h2>Hallo, { name } </h2>
});
const Childv2 = React.memo(({ onClick }) => {
    console.log("Render Childv2");
    return <button onClick={onClick}>Klik Anak</button>
})

function Memoization(){
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(false);

    const expensiveCalculation = (num) => {
        console.log("Hitung Ulang .....");
        for(let i = 0; i < 1000000000; i++ ){}
        return num * 2;
    }

    const handleClick = useCallback(() => {
        console.log("button diklik");
    })

    const result = useMemo(() => expensiveCalculation(count, [count]))
    return (
        <div>
            <Childv2 onClick={handleClick} />
            <Child name="Budi" />
            <p>Count: { count } </p>
            <p>Hasil Result: { result }</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
            <button onClick={() => setOther(!other)}>Toggle Other</button>

        </div>
    )
}

export default Memoization;