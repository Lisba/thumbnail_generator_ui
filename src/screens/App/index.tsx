import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound } from '@screens';
import { ProtectedRoute } from '@components';
import { useStore } from '@store';

function App() {
  const isAuth = useStore((state) => state.isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>

        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path='/home' element={<Home />} />
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
