import logo from '../1bat_banner.gif';
import Work from './Work';


const Body = () => {
  return (
    <div>
      <header className="App-header">
      <br />
      <img src={logo} className="banner" alt="logo" />
      </header>
      <Work />
    </div>
  );
}

export default Body;
