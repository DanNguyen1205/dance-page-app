import styles from './Footer.module.css'; // Your CSS Module for styling
// import PrimeComponents from '../../common/PrimeReactComponents';

const Footer = () => {  // Scroll to top function
    // const scrollToTop = () => {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // };
  
    return (
      <footer className={`${styles.footer}`}>
        <div className={`${styles.footerContent}`}>
          <div className={`${styles.footerLinks}`}>
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className={`${styles.footerContent}`}>
          <div className={`${styles.footerLinks}`}>
            <h4>Useful links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className={`${styles.nav}`}>
            <h4>Follow Us</h4>
            <div className={`${styles.socialIcons}`}>
              <a href="#" aria-label="Facebook">
                <i className={`pi pi-facebook ${styles.icon}`} /> {/* PrimeReact Facebook Icon */}
              </a>
              <a href="#" aria-label="Twitter">
                <i className={`pi pi-twitter ${styles.icon}`} /> {/* PrimeReact Twitter Icon */}
              </a>
              <a href="#" aria-label="Instagram">
                <i className={`pi pi-instagram ${styles.icon}`} /> {/* PrimeReact Instagram Icon */}
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className={`pi pi-linkedin ${styles.icon}`} /> {/* PrimeReact LinkedIn Icon */}
              </a>
            </div>
          </div>
  
          {/* <PrimeComponents.Button label="Back to Top" icon="pi pi-arrow-up" className="p-button-info" onClick={scrollToTop} /> */}
  
        <div className={`${styles.footerBottom}`}>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
}

export default Footer