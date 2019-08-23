import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import logo from './img/logo.png';
import IconoUsuario from './img/IconoUsuario.png';
import tutoria from './img/blog/cat-post/tutoria.jpg';
import './tutor.css';
import calendario from './img/blog/cat-post/calendario.jpg';
import cursos from './img/blog/cat-post/cursos.jpg';
import author1 from './img/author1.png';
import author from './img/author.png';
import matematicas from './img/blog/main-blog/matematicas.jpg';
import quimica from './img/blog/main-blog/quimica.jpg';
import historia from './img/blog/main-blog/historia.jpg';
import idiomas from './img/blog/main-blog/idiomas.jpg';
import facebook from './img/f-icons/facebook.png';
import twitter from './img/f-icons/twitter.png';
import authorB from './img/blog/author.png';

class Tutor extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  pag2(){
             {/*   document.getElementById("pag2").className = "page-item active";
                document.getElementById("pag1").className = "page-item";
                document.getElementById("1").style.display = "none";
                document.getElementById("2").style.display = "none";
                document.getElementById("3").style.display = "none";
                document.getElementById("i4").style.display = "";    */}                           
  };

  pag1(){
             {/*   document.getElementById("pag1").className = "page-item active";
                document.getElementById("pag2").className = "page-item";
                document.getElementById("1").style.display = "";
                document.getElementById("2").style.display = "";
                document.getElementById("3").style.display = "";
                document.getElementById("i4").style.display = "none";  */}                              
  };

  
  render() {
    
    return (
      <div className="pagina1">
        <header class="header_area">

            <div class="main_menu">
                

                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        
                        <a class="navbar-brand-logo_h"><img src={logo} alt="" width="70" height="70" /></a>
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
                                        <li class="nav-item"><a class="nav-link" href=""><Link to="./PerfilTutor">Editar Perfil</Link></a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href=""><Link to="./App">Cerrar Sesión</Link></a></li>
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
            <h2 class="encabezado">Perfil Tutor<a class="perfilUsuario" ><img src={IconoUsuario} alt="" align="center" /></a> </h2> 

        </section>
        
        

        <section class="blog_categorie_area">

            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="categories_post">
                            <img src={tutoria} alt="post" />
                             <div class="categories_details">
                                <div class="categories_text">
                                    <a href=""><Link to="./Tutorias">
                                        <h5>Tutorias</h5></Link>
                                    </a>
                                    <div class="border_line"></div>
                                    <p>Comienza una tutoria en tiempo real Ahora!</p>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="categories_post">
                            <img src={calendario} alt="post" />
                            <div class="categories_details">
                                <div class="categories_text">
                                    <a href=""><Link to="./Citas">
                                        <h5>Citas</h5></Link>
                                    </a>
                                    <div class="border_line"></div>
                                    <p>Revisa todas las actividades y reuniones programadas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="categories_post">
                            <img src={cursos} alt="post" />
                            <div class="categories_details">
                                <div class="categories_text">
                                    <a href=""><Link to="./Cursos">
                                        <h5>Cursos</h5></Link>
                                    </a>
                                    <div class="border_line"></div>
                                    <p>Visualiza los cursos asignados actualmente, con sus respectivos estudiantes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section class="blog_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blog_left_sidebar">
                            <article id="1" class="row blog_item">
                                <div class="col-md-3">
                                    <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <a >Matemática,</a>
                                            
                                            <a >Ciencia</a>
                                        </div>
                                        <ul class="blog_meta list">
                                            <li><a >Evaluado<i class="lnr lnr-user"></i></a></li>
                                            <li><a >12 Dic, 2017<i class="lnr lnr-calendar-full"></i></a></li>
                                            <li><a >12 Views<i class="lnr lnr-eye"></i></a></li>
                                            
                                            <li><div class="dropdown">
                                              <a>coments 03<i class="lnr lnr-bubble"></i></a>
                                              <div class="dropdown-content">
                                              
                                              <div id="coment" >
                                                 
                                                  <p align="justify" font-weight="bolder"> <image src={author1}  float="left" />que buena materia en serio! mira es tan genial que el tutor tiene que darla de nuevo, me gusto mucho la materia que yo probaría con aquella en serio</p>
                                              </div>
                                              <div id="coment" >
                                                  <p align="justify" font-weight="bolder"> <image src={author}  float="left" />que buena materia en serio! mira es tan genial que el tutor tiene que darla de nuevo, me gusto mucho la materia que yo probaría con aquella en serio</p>
                                              </div>
                                              <div id="coment" >
                                                  <p align="justify" font-weight="bolder"> <image src={author}  float="left" />Comentando dos veces para que vean que me gustó tanto la materia, recomiendo este profesor muchas veces. Aprenderás de largo</p>
                                              </div>
                                              
                                              </div>
                                            </div></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src={matematicas} alt="" />
                                        <div class="blog_details">
                                            <a href="">
                                                <h2>Matemática básica con principios avanzados</h2>
                                            </a>
                                            <p>Curso creado para fortalecer las falencias que tengan los estudiantes de 5to de bachillerato relacionado a matemáticas basicas con ciertos conocimientos avanzados que le ayudaran a mejorar su manera de razonar y resolver problemas</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article id="2" class="row blog_item">
                                <div class="col-md-3">
                                    <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <a >Ciencia,</a>
                                            
                                            <a >Química</a>
                                        </div>
                                        <ul class="blog_meta list">
                                            <li><a >Evaluado<i class="lnr lnr-user"></i></a></li>
                                            <li><a >10 Oct, 2017<i class="lnr lnr-calendar-full"></i></a></li>
                                            <li><a >8 Views<i class="lnr lnr-eye"></i></a></li>
                                            <li><div class="dropdown">
                                              <a>coments 01<i class="lnr lnr-bubble"></i></a>
                                              <div class="dropdown-content">
                                              <div id="coment" >
                                                 
                                                  <p align="justify" font-weight="bolder"> <image src={author1}  float="left" />No la cojan, a pesar que el profesor hace todo su esfuerzo la materia es muy pesada, dificil de entender. Pienso que se necesitaria de una clase presencial</p>
                                              </div>
                                              
                                              
                                              </div>
                                            </div></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src={quimica} alt="" />
                                        <div class="blog_details">
                                            <a href="">
                                                <h2>Fundamentos de Química 1</h2>
                                            </a>
                                            <p>Parte fundamental de este curso es revisar y reforzar los conocimientos básicos de química, con su respectiva implementación en el balanceo de fórmulas y conocer las diferentes soluciones existentes con su respectiva clasificación</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article id="3" class="row blog_item">
                                <div class="col-md-3">
                                    <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <a >Historia,</a>
                                            <a >Estilo de vida,</a>
                                            <a >Ciencia</a>
                                        </div>
                                        <ul class="blog_meta list">
                                            <li><a >Evaluado<i class="lnr lnr-user"></i></a></li>
                                            <li><a >22 Jul, 2017<i class="lnr lnr-calendar-full"></i></a></li>
                                            <li><a >22 Views<i class="lnr lnr-eye"></i></a></li>
                                            <li><a >00 Comments<i class="lnr lnr-bubble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src={historia} alt="" />
                                        <div class="blog_details">
                                            <a href="">
                                                <h2>Historia Contemporánea</h2>
                                            </a>
                                            <p>El estudio de La Historia Contemporánea es la rama de la Historia que estudia los hechos históricos de la edad contemporánea, periodo histórico que sucede a la denominada edad moderna y cuya proximidad y prolongación hasta el presente le confieren unas connotaciones muy particulares por su cercanía en el tiempo.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article id="i4" class="row blog_item">
                                <div class="col-md-3">
                                    <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <a >Inglés,</a>
                                            
                                            <a >Idiomas</a>
                                        </div>
                                        <ul class="blog_meta list">
                                            <li><a >Evaluado<i class="lnr lnr-user"></i></a></li>
                                            <li><a >15 Dic, 2017<i class="lnr lnr-calendar-full"></i></a></li>
                                            <li><a >24 Views<i class="lnr lnr-eye"></i></a></li>
                                            
                                            <li><div class="dropdown">
                                              <a>coments 03<i class="lnr lnr-bubble"></i></a>
                                              <div class="dropdown-content">
                                              
                                              <div id="coment" >
                                                 
                                                  <p align="justify" font-weight="bolder"> <image src={author1}  float="left" />que buena materia en serio! Aprender un nuevo idioma fue un reto para mi!, quisiera que puedan hacer más tutorias de esto</p>
                                              </div>
                                              <div id="coment" >
                                                  <p align="justify" font-weight="bolder"> <image src={author}  float="left" />No se como hay personas que les gusta el inglés yo lo destesto, apenas y se hablar español. Creo que esta tutoria me ayudó para pasar la materia pero no aprendiendo el idioma</p>
                                              </div>
                                              <div id="coment" >
                                                  <p align="justify" font-weight="bolder"> <image src={author}  float="left" />No le hagan caso al comentario de arriba, está loco! El inglés es lo mejor que pudo existir en la vida ! Tutor recomendado</p>
                                              </div>
                                              
                                              </div>
                                            </div></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src={idiomas} alt="" />
                                        <div class="blog_details">
                                            <a href="">
                                                <h2>Inglés Básico A</h2>
                                            </a>
                                            <p>Curso creado para aprender el idioma inglés y obtener destrezas al hablar con personas de otros países que hablen el mismo idioma. Este es un curso inicial, donde aprobarlo será indispensable para poder ir a los siguientes niveles.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </article>
                            
                            <nav class="blog-pagination justify-content-center d-flex">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a  class="page-link" aria-label="Previous">
                                            <span aria-hidden="true">
                                                <span class="lnr lnr-chevron-left"></span>
                                            </span>
                                        </a>
                                    </li>
                                    <li id="pag1"class="page-item active"><a class="page-link" onclick="pag1()">01</a>
                                    </li>
                                    <li id="pag2"class="page-item "><a  class="page-link" onclick="pag2()">02</a></li>
                                    
                                    <li class="page-item"><a href="#" class="page-link">04</a></li>
                                    <li class="page-item"><a href="#" class="page-link">09</a></li>
                                    <li class="page-item">-->
                                        <a  class="page-link" aria-label="Next">
                                            <span aria-hidden="true">
                                                <span class="lnr lnr-chevron-right"></span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="blog_right_sidebar">
                            <aside class="single_sidebar_widget search_widget">
                                <div class="input-group">
                                    
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button"><i class="lnr lnr-magnifier"></i></button>
                                    </span>
                                </div>
                                <div class="br"></div>
                            </aside>
                            <aside class="single_sidebar_widget author_widget">
                                <img class="author_img rounded-circle" src={authorB} alt="" />
                                <h4>Tutor Autorizado </h4>
                                <p>Docente en ciencias</p>
                                <div class="social_icon">
                                    <a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
                                    <a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a>
                                    <a href="https://www.github.com"><i class="fa fa-github"></i></a>
                                    <a href="#"><i class="fa fa-behance"></i></a>
                                </div>
                                <p>Este es una descripción del perfil del profesor "tutor autorizado 1" encargado
                                    de tutorias de ciertos cursos, graduado de una notable institución con conocimientos avanzados de matemáticas, física y química. </p>
                                <div class="br"></div>
                            </aside>
                            
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

export default Tutor;