import logoImage from "/src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <img src={logoImage} alt="Logo" className="logo-footer" />
        <p>&copy; {new Date().getFullYear()} E-World™. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
