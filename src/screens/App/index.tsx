/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound } from '@screens';
import { ProtectedRoute } from '@atoms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
