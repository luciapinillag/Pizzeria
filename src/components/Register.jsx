import React, { useState } from 'react'

function Register() {
    const [email, setEmail] = useState("")
    const [Contrasena, setContrasena] = useState("")
    const [confirmacontrasena, setConfirmacontrasena] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [error, setError] = useState(false)


    const validacion = (e) => {
        e.preventDefault();

        if (email === "" || Contrasena === "" || confirmacontrasena === "") {
            setError("Todos los campos son obligatorios");
            return;
        }
        setError("")
        setMensaje("")
        setEmail("");
        setContrasena("");
        setConfirmacontrasena("");

        if (Contrasena.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        if (Contrasena !== confirmacontrasena) {
            setError("Las contraseñas no coinciden");
            return;
        }
        setMensaje("Registro con exito");
    }

    return (
        <div>
            <form onSubmit={validacion}>
                <h1>Formulario de Registro</h1>

                {error && <div className='alert alert-danger'>{error}</div>}
                {mensaje && <div className='alert alert-success'>{mensaje}</div>}

                <div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Dirección de correo electrónico</label>
                        <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" required onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="Password" required onChange={(e) => setContrasena(e.target.value)} value={Contrasena} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmacontrasena" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="confirmacontrasena" required onChange={(e) => setConfirmacontrasena(e.target.value)} value={confirmacontrasena} />
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </div>
            </form>
        </div>
    )
}

export default Register

