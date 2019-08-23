import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Link, Redirect } from 'react-router-dom';


class App extends Component {
  constructor () {
    super();
    this.state = {
      
    };
    this.handleInputChange = this.handleInputChange.bind(this); {/* es para enlazar el metodo*/}
    
  }


handleInputChange(e) {
    const {value, name} = e.target; {/*almacena el valor del nombre en una constante usando j*/}
    console.log(value, name);
    this.setState({
      [name]: value
    });
}

render() {
  return (
    <div className="App">
      <form action="" id="log">
            <div className="imgcontainer">
                <a><img src={logo} alt="LOGO here" width="120" height="120" /></a>
                <h4>Iniciar Sesión</h4>
            </div>

            <div className="row justify-content-center">    
                 <div className="form-group">
                    <input id="email" type="email" class="form-control" placeholder="usuario" aria-describedby="emailHelp" name="uname" required value={this.state.uname}
              onChange={this.handleInputChange}/>

                     
                  </div>
            </div>

            <div className="row justify-content-center">    
                 <div className="form-group">
                   <input type="password" class="form-control" placeholder="contraseña" name="psw" required value={this.state.psw}
              onChange={this.handleInputChange}/>
                   <label id="record">
                      <input type="checkbox" class="form-check-input" name="remember" /> Recordarme
                  </label>
                 </div>

                 
            </div>
            
            <div className="row justify-content-center">    
                 <div className="form-group">
                    <button type="submit" id="blogin" class="btn btn-md btn-primary" >Ingresar</button>
      
                 </div>
            </div>

            <div className="row justify-content-center">    
                 <div className="form-group">
                   <span className="psw">¿Olvidaste tu <a id="linkPass" href="">contraseña?</a></span>
                 </div>
            </div>
            
        </form> 
        <footer id="tempFot">
          <a >Vista representante |</a>
          <a ><Link to="/Tutor">Vista tutor |</Link></a>
          <a >Vista estudiante |</a>
          <a >Vista administrador </a>
        </footer>


    </div>
  );
}
}

export default App;
