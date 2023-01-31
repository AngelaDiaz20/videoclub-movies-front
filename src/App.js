//Components
import AddMovie from './pages/AddMovie';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddMovie/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;