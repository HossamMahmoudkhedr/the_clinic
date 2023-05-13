import './App.css';
import Header from './components/header/header.jsx';
import FullPage from './components/fullPage/fullPage';
import { Login } from '@mui/icons-material';
import LoginPage from './components/login/login';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function App() {
	const [name, setName] = useState();
	useEffect(() => {
		setName(Cookies.get('logininfo'));
	}, [name]);

	return (
		<div className="App">
			<Header />
			{name == '' ? <LoginPage /> : <FullPage />}
		</div>
	);
}

export default App;
