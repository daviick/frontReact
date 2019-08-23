import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import logo from './img/logo.png';
import instructor1 from './img/instructors/ins1.jpg';
import facebook from './img/f-icons/facebook.png';
import twitter from './img/f-icons/twitter.png';
import './tutor.css';

class PerfilTutor extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  openAlert() {
      document.getElementsByClassName("alert").style.visibility="visible";
  }
  
  render() {
    
    return (
      
      <div >
        
        <header class="header_area">
        
          <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">  
                <div class="container">
                    <a class="navbar-brand-logo_h" href=""><img src={logo} alt="URMentoring icon" width="75" height="75" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href=""><Link to="./Tutor">Inicio</Link></a></li>
                            <li class="nav-item"><a class="nav-link" href=""><Link to="./Mensajes">Mensajes</Link></a></li>
                            
                            <li class="nav-item submenu dropdown active">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">Perfil</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" href="">Perfil</a></li>
                                    <li class="nav-item"><a class="nav-link" href="">Editar Perfil</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href=""><Link to="./App">Cerrar Sesión</Link></a></li>
                            <li class="nav-item">
                                <a href="" class="nav-link search" id="search">
                                    <i class="lnr lnr-magnifier"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    

    <section class="gradient-bg titulo-principal">   
        <h2 class="encabezado">Editar Perfil</h2> 
    </section>
   
    <section class="course_details_area section_gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 course_details_left">
                    <div class="blog_right_sidebar">
                        <div class="single_instructor">
                            <div class="author">
                            <img src={instructor1} alt="" />
                            </div>
                            <div class="author_decs">
                                <h4>Tutor1</h4>
                                <p class="profession">Licenciado de Edu.Básica</p>
                                <p>Este es una descripción del perfil del profesor "tutor autorizado 1" encargado
                                de tutorias de ciertos cursos, graduado de una notable institución con conocimientos avanzados de matemáticas, física y química.</p>
                            </div>
                        </div>
                    </div>
                </div>  

                <div class="col-lg-7 right-contents">
                    <h3 class="title">Información básica</h3>
                    <ul>
                        <li>
                            <a class="justify-content-between d-flex" >
                                <p>Nombre</p>
                
                                 <div class="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Martin Dunn" />
                                 </div>                            


                           </a>
                        </li>
                        <li>
                            <a class="justify-content-between d-flex" >
                                <p>Sexo</p>
                                <div class="col-75">
                                    <select id="genero" name="sexo">
                                      <option value="Seleccione">Seleccione</option>
                                      <option value="Masculino">Masculino</option>
                                      <option value="femenino">Femenino</option>
                                    </select>
                                </div>



                            </a>
                        </li>
                        <li>
                            <a class="justify-content-between d-flex" >
                                <p>Pais </p>
                                <div class="col-75">
                                    <select id="Pais" name="pais">
                                      <option value="Seleccione">Seleccione</option>
                                      <option value="Ecuador">Ecuador</option>
                                      <option value="Venezuela">Venezuela</option>
                                      <option value="Colombia">Colombia</option>
                                      <option value="Chile">Chile</option>
                                      <option value="Otros">Otros</option>
                                    </select>
                                </div>




                            </a>
                        </li>
                        <li>
                            <a class="justify-content-between d-flex">
                                <p>Fecha de nacimiento </p>
                                <div class="col-75">
                                    <input type="text" id="fdate" name="nacimiento" placeholder="15/05/1970" />
                                 </div>



                                
                            </a>
                        </li>
                        <li>
                            <a class="justify-content-between d-flex">
                                <p>Representado </p>
                                <div class="col-75">
                                    <input type="text" id="fnamer" name="representado" placeholder="Rose Dunn" />
                                 </div>


                                
                            </a>
                        </li>
                        <li>
                            <a class="justify-content-between d-flex">
                                <p>Telefono </p>
                                
                                <div class="col-75">
                                    <input type="text" id="ftelf" name="telefono" placeholder="0543436452" />
                                 </div>


                                
                            </a>
                        </li>
                    </ul>
                    <a id="submit" href="#" class="genric-btn success large" onclick="openAlert()">Guardar</a>
                    <div class="alert">
                      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                      <strong>Realizado!</strong> Su información se ha actualizado correctamente.
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
                        <li><a href="#">Acerca de nosotros</a></li>
                        <li><a href="#">Políticas de privacidad</a></li>
                        <li><a href="#">Términos de servicio</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 offset-md-2 single-footer-widget">
                    <h4>Enlaces de interés</h4>
                    
                    <ul>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Mapa web</a></li>
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

export default PerfilTutor;