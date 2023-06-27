import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Lista from './components/Lista';

function App() {
  const [name, setName] = useState('Félix');

  return (
    <>
      <Header name={name} />
      <Lista />
      <Footer />
    </>
  );
}

export default App;
