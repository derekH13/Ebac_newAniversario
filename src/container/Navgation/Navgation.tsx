import { Bold } from '../../styles/styles'
import './styles.css'

const Navgation = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <Bold className="navbar-brand">Meu Aniversario</Bold>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Meu Aniversario
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#hero">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Infomaçoes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Local
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#formulario">
                  Marcar Presença
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navgation
