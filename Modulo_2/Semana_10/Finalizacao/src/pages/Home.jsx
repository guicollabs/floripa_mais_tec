import { Banner } from '../components/Banner';
import { Produtos } from '../components/Produtos';

const Home = () => {
  return (
    <>
      <Banner />
      <Produtos num={3} />
    </>
  );
};

export default Home;
