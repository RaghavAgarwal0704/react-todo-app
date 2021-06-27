import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App() {
  return (
    <>
    <Header title="header" bool={false}/>
    <Main title="main"/>
    <Footer title="footer"/>
    </>
  );
}
export default App;
