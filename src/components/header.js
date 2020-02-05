import React from "react"
import { Link } from "gatsby"
import logo from "../images/bio-veg-logo.png"

class Header extends React.Component {
  state = {
    visible: false,
  }

  showMobileMenu = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible }
    })
  }

  render() {
    return (
      <header>
        <section className="mobile-nav">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo-bio-veg" width="120px" />
          </Link>
          {this.state.visible ? (
            <div onClick={this.showMobileMenu} className="burger-icon-close">
              <span>X</span>
            </div>
          ) : (
            <div onClick={this.showMobileMenu} className="burger-icon-open">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </section>

        {this.state.visible ? (
          <nav className="mobile-menu header">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/progetto">IL PROGETTO</Link>
              </li>
              <li>
                <Link to="/paccasassi">PACCASASSI</Link>
              </li>
              <li>
                <Link to="/team">PARTNERS</Link>
              </li>
              <li>
                <Link to="/contatti">CONTATTI</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <p></p>
        )}

        <nav className="desktop-menu header">
          <Link to="/">
            {" "}
            <img className="logo" src={logo} alt="logo-bio-veg" width="140px" />
          </Link>
          <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/progetto">IL PROGETTO</Link>
              </li>
              <li>
                <Link to="/paccasassi">PACCASASSI</Link>
              </li>
              <li>
                <Link to="/team">PARTNERS</Link>
              </li>
              <li>
                <Link to="/contatti">CONTATTI</Link>
              </li>
            </ul>
        </nav>

        <style jsx="true">{`
          .mobile-nav {
            display: flex;
            justify-content: space-between;
            padding: 20px;
          }
          .header li  {
            text-decoration: none;
            list-style: none
          }
          .header li a{
            text-decoration: none;
            color: #777;
            font-size: 15px;
            font-weight: 500
          }
          .desktop-menu {
            display: none;
          }
          .header a:hover {
            color: #241f20 !important;
          }
          .burger-icon-close span {
            font-size: 26px;
            color: #777;
            position: relative;
            top: 50px;
            right: 20px;
          }
          .burger-icon-open {
            position: relative;
            top: 55px;
            right: 10px;
          }
          .burger-icon-open span {
            width: 25px;
            border: 1px solid #777;
            margin: 6px 0;
            display: block;
          }
          .mobile-menu li {
            margin: 20px 0;
          }
          @media (min-width: 1200px) {
            .mobile-nav {
              display: none;
            }
            .mobile-menu {
              display: none;
            }
            .logo{
              position: relative;
              bottom: 10px
            }
            .desktop-menu {
              display: flex;
              justify-content: space-around;
              margin-top: 20px
            }
            .desktop-menu ul {
              display: flex;
              position: relative;
              top: 10px
            }
            .desktop-menu ul li {
              margin: 20px;
            }  
          }
        `}</style>
      </header>
    )
  }
}

export default Header