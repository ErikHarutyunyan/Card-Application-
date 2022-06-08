import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
// Page
import Home from './page/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    
  );
}

export default App;
