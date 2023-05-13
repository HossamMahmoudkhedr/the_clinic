import './App.css';
import Header from './components/header/header.jsx';
import FullPage from './components/fullPage/fullPage';
import { Login } from '@mui/icons-material';
import LoginPage from './components/login/login';

function App() {
	return (
		<div className="App">
			<Header />
			{/* <FullPage /> */}
			<LoginPage />
		</div>
	);
}

export default App;
