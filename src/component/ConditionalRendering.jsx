function ConditionalRendering() {
    const isLoggedIn = true;
    const operatorTernary = false;

    if(isLoggedIn){
        return (
            <div>
                {operatorTernary ? (
                    <h2>Selamat Datang di Aplikasi Rendering Conditional Menggunakan Ternary Operator </h2>
                ) : (
                    <h2>Silahkan Login untuk mengakses Aplikasi Rendering Conditional</h2>
                )}
                <p>Rendering Conditional adalah teknik dalam React untuk menampilkan elemen atau komponen tertentu berdasarkan kondisi tertentu. Dengan menggunakan rendering conditional, kita dapat mengontrol apa yang ditampilkan kepada pengguna berdasarkan status aplikasi atau data yang tersedia.</p>
            </div>
        )} else {
        return ('Silahkan Login untuk mengakses Aplikasi Rendering Conditional');
    }
}

export default ConditionalRendering
