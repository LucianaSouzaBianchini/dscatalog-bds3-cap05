import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Navbar from "components/Navbar";
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
            <MainImage/>
          </div>
          <div className="home-content-container">
            <h1>Tela de Login</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
