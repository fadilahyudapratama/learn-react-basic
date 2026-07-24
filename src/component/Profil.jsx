function Profil({ name, age, location, email, description, available, socialMedia }) {
    return (
        <div>
            <h1>Belajar Props Terkait Profil</h1>
            <small>Profil adalah informasi pribadi seseorang yang mencakup nama, umur, alamat, dan data lainnya.</small>
            <p>Nama: {name}</p>
            <p>Umur: {age}</p>
            <p>Alamat: {location}</p>
            <p>Email: {email}</p>
            <p>Deskripsi: {description}</p>
            <p>Tersedia: {available ? "Ya" : "Tidak"}</p>
            <p>Media Sosial:</p>
            <ul>
                <li>Twitter: {socialMedia.twitter}</li>
                <li>LinkedIn: {socialMedia.linkedin}</li>
            </ul>
        </div>
    );
}

export default Profil