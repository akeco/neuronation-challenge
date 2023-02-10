import { FC } from 'react';
import Home from 'pages/Home';
import Header from 'components/Header/Header';
import './App.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
