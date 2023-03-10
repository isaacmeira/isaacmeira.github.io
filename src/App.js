import data from './db'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css';
import Personal from './assets/image';
import Logo from './assets/logo.png';

function App() {

  const url = 'https://www.vouserdesenvolvedor.com.br/'

  const callPage = () => {
    window.open(url,'_blank');
  }


  return (
    <div className="App">
      <div className="MainDiv">
        <div className="LeftGrid">
          <h1> Isaac Meira </h1>
          <img src={Personal} alt='me' />
          <span>Activities from time 😁</span>
          <small><strong>Isaac Meira</strong> is a javascript developer, who writes articles for the community, in order to disseminate knowledge for free, works as a developer for about 6 years, always reading about new technologies and good development practices, in addition to books on self-development and soft-skills . </small>
          <small>Site mantened by: <a target="_blank" href="https://github.com/isaacmeira">Isaac Meira</a></small>
          <strong className='cta'>Se torne desenvolvedor com o treinamento online</strong>
          <button onClick={() => callPage()} className='course'><img className='logo' src={Logo} /></button>
        </div>
        <div className="rightGrid">
          <h2>Activities</h2>
          <span>These are all activities by me for the community (In progress)</span>

          <h3>Table of contents
            <li>Articles</li>
            <li>Mentoring/Lectures</li>
            <li>Some Adicional Information</li>
          </h3>
         
          <h2>Articles</h2>
          <h3>{data.data.impacts.articles.impact}</h3>
          <div className="Articles">
            { data.data.articles.map((item) => (
              <>
              <a target="_blank" className="title" href={item.links[0]}>{item.title}</a>
              <span className="subject">{item.subject}</span>
              <div className="rowed">    
                {  item.keywords.map((word) => (
                  <div>  <small>{word}</small> </div>
                
                )) }
              </div>
              </>
            )) }
          </div>

          <h4>Mentoring/Lectures</h4>
          <h3>{data.data.impacts.meetups.impact}</h3>
          <div className="Articles">
            { data.data.meetups.map((item) => (
              <>
              <a target="_blank" href={item.link} className="title" >{item.title}</a>
              <span className="place">{item.place}</span>
              <span className="subject">{item.description}</span>
              <span className="place">{item.local}</span>
              <div className="rowed">    
                {  item.tags.map((word) => (
                  <div>  <small>{word}</small> </div>
                
                )) }
              </div>
              </>
            )) }
          </div>

          <h4>Adicional Information</h4>
          <h3>{data.data.impacts.Projects.impact}</h3>
          <div className="Info">
              <FaGithub color="#272a2e" size={30} />
              <a target="_blank" href="https://github.com/isaacmeira">Github</a>
          </div>
          <h3>{data.data.impacts.linkedin.impact}</h3>
          <div className="Info">
             <FaLinkedin color="#0A66C2" size={30} />
              <a target="_blank" href="https://www.linkedin.com/in/isaac-meira-15b8b7143/">Linked-In</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
