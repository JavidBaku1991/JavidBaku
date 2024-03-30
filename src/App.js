import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom';

import Home from './pages/Home.js'
import About from './pages/About.js'
import './index.css'; 
import FAQS from './pages/FAQS.js';
import Notes from './pages/Notes.js';
import Lessons from './pages/Lessons.js';
import Contacts from './pages/Contacts.js';
import { useTranslation } from 'react-i18next';



function App() {

const {t}=useTranslation();

  return (<div>
       <HashRouter>
      <Routes>
               <Route element={<Home />} path='/'  exact/>
               <Route element={<About />} path='/about' exact />
               <Route element={<FAQS />} path='/faqs' exact />
               <Route element={<Notes />} path='/notes'exact  />
               <Route element={<Lessons />} path='/lessons'  exact/>
               <Route element={<Contacts />} path='/contacts'  exact/>
      </Routes>
      
    </HashRouter>
   
  </div>
    
  );
}

export default App;