import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import logo from './img/logo.png';
import facebook from './img/f-icons/facebook.png';
import twitter from './img/f-icons/twitter.png';
import trainer1 from './img/courses/trainer1.jpg';
import author from './img/author.png';

class Cursos extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  

  render() {
    
    return (
      
      <div className="cursosTutor">
        

          <header class="header_area">
           <div class="main_menu">
            

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    
                    <a class="navbar-brand-logo_h" href=""><img src={logo} alt="" width="70px" height="70px" /></a>
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
    </header>
   
    <section class="gradient-bg titulo-principal">   
        <h2 class="encabezado">Cursos </h2> 

    </section>

    
    
    <div class="popular_courses lite_bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="main_title">
                        
                        <p>A continuación se detallan los distintos cursos asignados al profesor en este período lectivo</p>
                    </div>
                </div>
            </div>
            <div class="row">
                
                <div class="col-lg-3 col-md-6">
                    <div class="single_course">
                        <div class="course_head overlay">
                            <img class="img-fluid w-100" src={trainer1} alt="" />
                            <div class="authr_meta">
                                <img src={author} alt="" />
                                <span>Tutor Autorizado 1</span>
                            </div>
                        </div>
                        <div class="course_content">
                            <h4>
                                <a href="">Matemáticas avanzadas 2</a>
                            </h4>
                            <p>Retomando conocimientos del curso matemáticas avanzadas 1, se procederá a implementarlos en nueva clases de problemas con nuevas metodologías</p>
                            <div class="course_meta d-flex justify-content-between">
                                <div>
                                    
                                </div>
                                <div>
                                    <span class="price">Disponible</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="single_course">
                        <div class="course_head overlay">
                            <img class="img-fluid w-100" src={trainer1} alt="" />
                            <div class="authr_meta">
                                <img src={author} alt="" />
                                <span>Tutor Autorizado 1</span>
                            </div>
                        </div>
                        <div class="course_content">
                            <h4>
                                <a href="">Fisica 2</a>
                            </h4>
                            <p>Aprender nuevos conocimientos relacionados a la fisica vectorial y en movimiento para así poder resolver problemas de la vida real relacionados a estos conocimientos.</p>
                            <div class="course_meta d-flex justify-content-between">
                                <div>
                                    
                                </div>
                                <div>
                                    <span class="price df_color1">Cancelado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="single_course">
                        <div class="course_head overlay">
                            <img class="img-fluid w-100" src={trainer1} alt="" />
                            <div class="authr_meta">
                                <img src={author} alt="" />
                                <span>Tutor Autorizado 1</span>
                            </div>
                        </div>
                        <div class="course_content">
                            <h4>
                                <a href="">Quimica Organica</a>
                            </h4>
                            <p>Con ayuda de los conocimientos previos de quimica general 1 y 2 poder aplicarlos para nuevo tipo de formulas y conocimientos respectivos a este curso</p>
                            <div class="course_meta d-flex justify-content-between">
                                <div>
                                    
                                </div>
                                <div>
                                    <span class="price">Disponible</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                
        </div>
    </div>
    

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
    </div>
      
    );
  }
}

export default Cursos;