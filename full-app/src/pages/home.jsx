import HomeBody from "../components/homeBody";
import Navbar from "../components/navbar";
import SearchNavbar from "../components/searchnav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <SearchNavbar/>
      <Navbar />
      <HomeBody/>
      {/* <button><FontAwesomeIcon icon={faMessage} /></button> */}
      <Footer/>
    </div>
  );
};

export default Home;
