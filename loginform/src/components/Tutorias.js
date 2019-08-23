import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import facebook from './img/f-icons/facebook.png';
import twitter from './img/f-icons/twitter.png';
import logo from './img/logo.png';

class Tutorias extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  

  render() {
    
    return (
      
      <div className="tutoriasVentana">
        
          <div class="main_menu">
            

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                   
                    <a class="navbar-brand-logo_h" href="index.html"><img src={logo} alt="" width="70px" height="70px" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item active"><a class="nav-link" href=""><Link to="./Tutor">Inicio</Link></a></li>
                            <li class="nav-item"><a class="nav-link" href=""><Link to="./Mensajes">Mensajes</Link></a></li>
                            
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">Perfil</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" href="">Perfil</a></li>
                                    <li class="nav-item"><a class="nav-link" href=""><Link to="./PerfilTutor">Editar Perfil</Link></a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href=""><Link to="./App">Cerrar Sesion</Link></a></li>
                            <li class="nav-item">
                                <a href="#" class="nav-link search" id="search">
                                    <i class="lnr lnr-magnifier"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <section class="gradient-bg titulo-principal">   
            <h2 class="encabezado">Tutorías </h2> 

        </section>
        <section class="calendar-area">
          <div class="container" >
            <div class="row">
                
                <div class="col-lg-7 right-contents" display="inline">
                    <h3 class="titleVideo">En unos instantes un tutor le estará atendiendo</h3>
                    <video controls width="450">

                        <source src=""
                                type="" />

                        <source src=""
                                type="" />

                        Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div class="botones">
                        <a id="submit-video" href="#" class="genric-btn success large" onclick="">Solicitar tutoria</a>
                        <a id="submit-video" href="#" class="genric-btn success large" onclick="">Cerrar transmisión</a>
                    </div>
                    
                </div>
                
            </div>
          </div>
        
        </section>
        <footer class="footer-area section_gap">
        <div class="container text-center text-md-left">
            <div class="row justify-content-center">
                <div class="col-lg-2 col-md-6 single-footer-widget">
                    <h4>Contáctanos</h4>
                    
                    <p>help@urmentoring.com</p>
                    <p>1800-10969100</p>
                </div>
                <div class="col-lg-2 col-md-6 offset-md-2 single-footer-widget">
                    <h4>Nuestra empresa</h4>
                    
                    <ul>
                        <li><a href="">Acerca de nosotros</a></li>
                        <li><a href="#">Políticas de privacidad</a></li>
                        <li><a href="#">Términos de servicio</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 offset-md-2 single-footer-widget">
                    <h4>Enlaces de interés</h4>
                    
                    <ul>
                        <li><a href="comoFunciona.html">Preguntas frecuentes</a></li>
                        <li><a href="../index.html">Mapa web</a></li>
                        <li><a href="#">Quiero ser tutor</a></li>
                    </ul>
                </div>
                
                <div class="footer-copyright text-center py-3">
                Copyright © 2019 All rights reserved 
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                </div>

            </div>
        </div>
     </footer>
        
      </div>
      
    );
  }
}

export default Tutorias;