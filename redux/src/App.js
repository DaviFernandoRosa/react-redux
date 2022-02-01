import './App.css';

import {Provider} from 'react-redux';
import { store } from './store/store';

import SideBar from './components/SideBar';
import Usuarios from './components/Usuarios';

function App() {
  return (
         <Provider store={store}>
            <div className="App">
             <SideBar/>
             <Usuarios/>
           </div>
        </Provider>
     );
}

export default App;
