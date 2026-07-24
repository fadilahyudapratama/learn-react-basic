function Biodata({ nama, umur, alamat }) {
    return (
        <div>
            <h1>Belajar Props Terkait Biodata</h1>
            <small>Biodata adalah informasi pribadi seseorang yang mencakup nama, umur, alamat, dan data lainnya.</small>
            <p>Nama: {nama}</p>
            <p>Umur: {umur}</p>
            <p>Alamat: {alamat}</p>
        </div>
    );
}

export default Biodata