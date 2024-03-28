import React from 'react'
import blifelogo from '../components/images/blifelogo.png';
import banner from '../components/images/Banner.png';
import promotion from '../components/images/Rectangle 1.png';
export const Header = () => {
  return (
    //Narbar
    <section>
      <div className="head container-fluid row">
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-body-white">
          <div className="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand logo" href="#"><img src={blifelogo} alt="Blife" /></a>
            <div className="collapse navbar-collapse menu" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-dark fw-bold rounded-pill" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark fw-bold rounded-pill" href="#">Promociones</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark fw-bold rounded-pill" href="#">Nosotros</a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="nav justify-content-end">
                <li className="nav-items">
                  <button class="btn btn-outline-dark no-border rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </li>
                <li className="nav-items">
                  <button type="button" className="btn btn-outline-dark no-border rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fa-regular fa-user"></i>
                  </button>
                </li>
                <li className="nav-items shop">
                  <div>
                    <span className="position-relative top-50 start-100 translate-middle badge rounded-pill text-bg-secondary bg-dark">
                      9+
                    </span>
                    <button className="btn btn-outline-dark no-border rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i className="fa-solid fa-bag-shopping"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </nav>
        {/*search-btn*/}
        <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <input id="name" type="text" placeholder="Search......" required />
            <button class="btn btn-outline-dark no-border rounded-pill" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        {/*user-btn*/}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Iniciar sesión</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Usuario</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Usuario o correo electrónico"/>
                </div>
                <label for="inputPassword5" className="form-label">Contraseña</label>
                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                <div id="passwordHelpBlock" className="form-text"></div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-ligth" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-dark">Entrar</button>
              </div>
            </div>
          </div>
        </div>

        {/*shop-btn*/}
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body position-absolute top-50 start-50 translate-middle">
            Vacío
          </div>
          <button type="button" className="btn btn-dark pago position-absolute bottom-0 start-50 translate-middle-x">Proceder al pago</button>
        </div>
        <div>
          <div className="image-banner">
            <img src={banner} alt="banner" />
            <div className="image-promotion">
              <img src={promotion} alt="promotion" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
