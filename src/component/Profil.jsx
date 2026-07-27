import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

function Profil() {
    const user = useContext(ProfileContext);
     const {
        name,
        age,
        location,
        email,
        description,
        available,
        socialMedia,
    } = user;
    return (
        <div>
        <h2>Belajar Context API</h2>

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