import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import styles from "./Navbar.module.css"; // Import CSS module properly
import Sidebar from "../Sidebar/Sidebar"

const Navbar = () => {
    return (
        <nav className={`${styles.nav}`}>
            {/* Logo and Title */}
            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    alt="Logo"
                    src="https://primefaces.org/cdn/primereact/images/logo.png"
                    height="40"
                    style={{ marginRight: '1rem' }}
                />
                <h1 style={{ margin: 0 }}>Dance dance dance</h1>
            </div> */}

            {/* Desktop Menu (always visible on large screens) */}
            <div className={`${styles.navbarMenu}`}>
                <Button label="Home" icon="pi pi-home" className="p-button-outlined" onClick={() => window.location.href = "/"} />
                <Button label="About" icon="pi pi-info-circle" className="p-button-outlined" onClick={() => window.location.href = "/"} />
                <Button label="Contact" icon="pi pi-envelope" className="p-button-outlined" onClick={() => window.location.href = "/"} />
                <Button icon="pi pi-user" className={`p-button-rounded p-button-info`} aria-label="Account" onClick={() => window.location.href = "/"} />            
            </div>

            {/* Mobile menu  */}
            <div className={`${styles.sidebarDisplay}`}>
            <Sidebar/>
            <Button icon="pi pi-user" className={`p-button-rounded p-button-info ${styles.userIcon}`} aria-label="Account" onClick={() => window.location.href = "/profile"} />            
            </div>

        </nav>
    );
};

export default Navbar;