import Navbar from './components/Navbar';

import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="teste">
        <Outlet />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  )
}

export default App

//useEffect(() => {
 // async function deletePost() {
 //   await axios.delete(`/ficcaocientifica${id}`);
  //  setStatus('Excluído');
 // }
  
 // deletePost();
//}, []);