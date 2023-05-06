import logo from '../1bat_banner.gif';
import Header from './Header';

const Body = () => {
  return (
    <div>
      <header className="App-header">
      <br />
      <img src={logo} className="banner" alt="logo" />
        {/* <p>
        © 2023 1 BAT | 1 Brick at A Time
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      <div className="main">
        <div style={{ border: '1px solid white', height: '250px', width: '500px', borderRadius: '20px', marginRight: '25px'}}>



        </div>
        <br />
        <div style={{ border: '1px solid yellow', height: '250px', width: '500px', borderRadius: '20px'}}></div>
      </div>


        {/* <p>
        © 2023 1 BAT | 1 Brick at A Time
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default Body;
