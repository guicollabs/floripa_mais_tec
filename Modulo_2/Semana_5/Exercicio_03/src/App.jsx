import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [name, setName] = useState('Félix');

  return <Header name={name} />;
}

export default App;
