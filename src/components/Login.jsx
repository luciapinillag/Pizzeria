import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState("");

    const validacion = (e) => {
        e.preventDefault();

        
        if (email === "" || password === "") {
            setError("Todos los campos son obligatorios");
            return;
        }

     
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

       
        setError("");
        setMensaje("Inicio de sesión con éxito");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <form onSubmit={validacion}>
                <h1>Iniciar Sesión</h1>

                {error && <div className='alert alert-danger'>{error}</div>}
                {mensaje && <div className='alert alert-success'>{mensaje}</div>}

                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="Email" 
                        aria-describedby="emailHelp" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default Login;
