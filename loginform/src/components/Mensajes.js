import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import './tutor.css';
import logo from './img/logo.png';


class Mensajes extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  

  render() {
    
    return (
      
      <div className="mensajesTutor">
          <div class="main_menu">

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    
                    <a class="navbar-brand-logo_h" href=""><img src={logo} alt="" width="70" height="70" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href=""><Link to="./Tutor">Inicio</Link></a></li>
                            <li class="nav-item"><a class="nav-link" href="" onclick="sms()">Mensajes</a>
                                
                            </li>
                            
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
                                <a href="" class="nav-link search" id="search">
                                    <i class="lnr lnr-magnifier"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          </div>

   
          <section class="gradient-bg titulo-principal">   
              <h2 class="encabezado">Mensajes</h2>
              
          </section>

          <div class="messaging">
         <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recientes</h4>
            </div>
            <div class="srch_bar">
              <div class="stylish-input-group">
                <input type="text" class="search-bar"  placeholder="Search" />
                <span class="input-group-addon">
                <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                </span> </div>
            </div>
          </div>
          <div class="inbox_chat">
            <div class="chat_list active_chat">
              <div  class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="chat_ib" onclick="sms()">
                  <h5>Representante 1 <span class="chat_date">Julio 12</span></h5>
                  <p>Quisiera saber cuando se abrirá el curso de la tutoria de francés, mi hijo necesita refozar esa materia por favor.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="chat_ib">
                  <h5>Representante 2 <span class="chat_date">Julio 7</span></h5>
                  <p>Muchas gracias por la información profesor.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="chat_ib">
                  <h5>Representante 3 <span class="chat_date">Junio 25</span></h5>
                  <p>¿Y adicionalmente como puedo verificar que dará esa materia en el próximo ciclo?</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="chat_ib">
                  <h5>Representante 4 <span class="chat_date">Junio 20</span></h5>
                  <p>Profesor, necesito que me aclare unas cosas sobre el sistema de calificación. Espero su pronta respuesta.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="chat_ib">
                  <h5>Representante 5 <span class="chat_date">Junio 20</span></h5>
                  <p>Profesor, lo estamos esperando en la tutoria en línea. Conéctese!</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="chat_ib">
                  <h5>Representante 6 <span class="chat_date">Junio 18</span></h5>
                  <p>Profesor, quisiera solicitar una recalificación para mi hijo por favor. No me parece su método de calificar</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div  class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="chat_ib">
                  <h5>Representante 7 <span class="chat_date">Junio 2</span></h5>
                  <p>Hola, profesor. Quiero solicitar una reunión con usted.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mesgs">
          <div class="msg_history">
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Hola, profesor.</p>
                  <span class="time_date"> 11:01 AM    |    June 9</span></div>
              </div>
            </div>
            <div class="outgoing_msg">
              <div class="sent_msg">
                <p>Si, dígame en que le puedo ayudar.</p>
                <span class="time_date"> 11:05 AM    |    June 9</span> </div>
            </div>
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Tengo varias dudas acerca de las tutorias</p>
                  <span class="time_date"> 11:05 AM    |    Yesterday</span></div>
              </div>
            </div>
            <div class="outgoing_msg">
              <div class="sent_msg">
                <p>¿Cuales dudas?</p>
                <span class="time_date"> 11:08 AM    |    Today</span> </div>
            </div>
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Quisiera saber cuando se abrirá el curso de la tutoria de francés, mi hijo necesita refozar esa materia por favor.</p>
                  <span class="time_date"> 11:08 AM    |    Today</span></div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input type="text" class="write_msg" placeholder="Type a message" />
              <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>

        
    </div>
    </div>
    );
  }
}

export default Mensajes;