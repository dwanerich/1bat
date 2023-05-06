import logo from '../1bat_banner.gif';
import Header, { Nav } from './Nav';
import '../index.css'
import { NavLink } from "react-router-dom";


const Work = () => {
  return (
    <div>
      <div className="App-header"
      style={{backgroundColor: 'white'}}>
        <br />
         <p style={{border: 'solid 1px rgb(42, 214, 244)', borderRadius: '20px'}}>
        services
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      <div className="main">
        <NavLink
        to="http://blog.fabric-frequency.com">
        <div className="work">
          rss
        </div>

        </NavLink>

        <NavLink
        to="http://www.dwanerich.com">
        <div className="work">
          apps
          </div>
        </NavLink>
          <NavLink
          to="https://open.spotify.com/artist/6d2X2fOrEI5adbahA0Avxf">
          <div className="work">
          sound
        </div>

          </NavLink>

        <NavLink
          to="/drumkit"
          exact
        >
        <div className="work">
          u/i
          </div>

        </NavLink>
          </div>
      </div>
    </div>
  );
}

export default Work;
