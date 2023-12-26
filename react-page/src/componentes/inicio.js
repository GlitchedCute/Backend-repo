import { useState } from "react"

export function Formulario({setUser}) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(nombre === "" || contraseña === ""){
            setError(true)
            return
        }

        setError(false)

        setUser([nombre])

    }

    return (
        <section className="border border-black bg-info bg-gradient m-5 p-5 rounded-3">
            <h2 className="m-3 fw-bold">Login</h2>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col col-md-6 col-sm-12">
                <input
                className="form-control border-black border-2 bg-dark-subtle p-3 text-center"
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
                    </div>
                    <div className="col col-md-6  col-sm-12">
                <input
                className="form-control border-black border-2 bg-dark-subtle p-3 text-center"
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={e => setContraseña(e.target.value)}
                />
                    </div>
                </div>
                <button type="buttom" className="btn btn-success border-black border-2 text-light fw-bold m-3">Iniciar sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}


