import logo from '../1bat_banner.gif';
import Header from './Nav';
import '../index.css'

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
        <div className="work">
          creative
        </div>

        <div className="work">
          apps
          </div>
          <div className="work">
          sound
        </div>

        <div className="work">
          U/I
          </div>
          </div>
      </div>
    </div>
  );
}

export default Work;
