import '../stylesheets/header.css';

const Header = () => {
  return (
    <div className='nav'>
      <div className = 'nav-logo-and-links'>
        <div className='nav-logo'>
          <h2> Sybaritic Styles </h2>
        </div>

        <div className='nav-links'>
          <a href='#'> Home </a>
          <a href='#'> About </a>
          <a href='#'> Contact </a>
          <a href='#'> Shop </a>
          <a href='#'> Blog </a>
        </div>
      </div>

      <div className='nav-buttons'>
        <button className='nav-button'>
          <i className="fab fa-instagram"></i>
        </button>

      </div>
    </div>
  )
}

export default Header;
