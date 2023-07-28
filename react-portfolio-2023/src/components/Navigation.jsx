import "../styles/navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-tabs">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div className="navbar-nav">
         <a className="nav-item nav-link" href="#About">about me</a>
            <a className="nav-item nav-link" href="#Portfolio">porfolio</a>
            <a className="nav-item nav-link" href="#">resume</a>
            <a className="nav-item nav-link" href="#Contact">get in touch</a>
         </div>
         
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
