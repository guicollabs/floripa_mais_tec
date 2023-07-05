import { useContext, createContext, useState } from 'react';

const AppContext = createContext();

const database = {
  home: {
    title: 'Home',
    subtitle: 'Estamos na página home',
  },
  product: {
    title: 'Produtos',
    subtitle: 'Estamos na página produtos',
  },
  contact: {
    title: 'Contato',
    subtitle: 'Estamos na página contato',
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Estamos na página faq',
  },
};

export const AppProvider = ({ children }) => {
  const [banner, setBanner] = useState(database);
  return <AppContext.Provider value={{ x }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
