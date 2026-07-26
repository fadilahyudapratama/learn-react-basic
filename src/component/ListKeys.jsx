function UserItem( { name, age, location }) {
    return (
        <li>
            <strong>Nama Lengkap:</strong> {name}, <strong>Umur:</strong> {age}, <strong>Dari:</strong> {location}
        </li>
    )
}

function ListKeys() {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];
    const animals = ['Kambing', 'Kucing', 'Anjing', 'Burung', 'Ikan', 'Kuda', 'Sapi', 'Ayam', 'Bebek', 'Kelinci'];
    const users = [
        { id: 6, name: 'Agus', age: 35, location: 'Makassar' },
        { id: 7, name: 'Tina', age: 29, location: 'Semarang' },
        { id: 8, name: 'Rudi', age: 31, location: 'Palembang' },
        { id: 9, name: 'Lina', age: 26, location: 'Malang' },
        { id: 10, name: 'Hendra', age: 33, location: 'Balikpapan' }
    ]
    const userv2 = [
        { id: 1, name: 'Budi', age: 25, location: 'Jakarta' },
        { id: 2, name: 'Siti', age: 30, location: 'Bandung' },
        { id: 3, name: 'Andi', age: 28, location: 'Surabaya' },
        { id: 4, name: 'Rina', age: 22, location: 'Yogyakarta' },
        { id: 5, name: 'Dewi', age: 27, location: 'Medan' },
    ]
    return (
        <div>
            <h2> Daftar Nama:</h2>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <h2>Daftar Hewan Menggunakn List dan Keys:</h2>
            <ul>
                {animals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>
            <h2>Daftar Pengguna Menggunakan List dan Keys:</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>Nama Lengkap:</strong> {user.name}, <strong>Umur:</strong> {user.age}, <strong>Dari:</strong> {user.location}
                    </li>
                ))}
            </ul>

            <h2>Daftar Pengguna Menggunakan List dan Keys dengan Komponen:</h2>
            <ul>
                {userv2.map((user) => (
                    <UserItem key={user.id} name={user.name} age={user.age} location={user.location} />
                ))}
            </ul>
        </div>
    )
}

export default ListKeys;