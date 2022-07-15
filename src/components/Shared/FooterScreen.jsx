import './styles/footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>Dev - Iván Avila | 2022</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="https://github.com/ivan-av" className="redes__links" target={'__blank'}>
          <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="https://www.linkedin.com/in/ivan-daniel-avila/" className="redes__links" target={'__blank'}>
          <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterScreen;
