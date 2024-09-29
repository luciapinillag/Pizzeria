import { formatNumber } from "../utils/formateo";

function Navbar() {
    const total = 25000;
    const token = false;

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pizzeria Mamma Mía</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">🍕 Home</a>
                            </li>
                            {token ? (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔓 Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔒 Layout</a>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔐 Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔐 Register</a>
                                    </li>
                                </>
                            )}
                            <li className="nav-item">
                                <span className="nav-link">🛒 Total: ${formatNumber(total)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
