//Components
import AddMovie from './pages/AddMovie';
import EditMovie from './pages/EditMovie';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddMovie/>} />
        <Route path='/edit/:id'element={<EditMovie/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;