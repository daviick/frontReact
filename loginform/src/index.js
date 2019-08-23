import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tutor from './components/Tutor';
import Mensajes from './components/Mensajes';
import PerfilTutor from './components/PerfilTutor';
import Cursos from './components/Cursos';
import Citas from './components/Citas';
import Tutorias from './components/Tutorias';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

const AppInicio = () =>(
	<BrowserRouter>
		
		<Route path="/App" component={App} />
		<Route path="/Tutor" component={Tutor} />
		<Route path="/PerfilTutor" component={PerfilTutor} />
		<Route path="/Mensajes" component={Mensajes} />
		<Route path="/Cursos" component={Cursos} />
		<Route path="/Citas" component={Citas} />
		<Route path="/Tutorias" component={Tutorias} />

	</BrowserRouter>
);


ReactDOM.render(<AppInicio />, document.getElementById('root'));


serviceWorker.unregister();
