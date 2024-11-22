import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-blue/theme.css";  // Pick a theme or customize
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./Sidebar.module.css"; // Custom styles for positioning

export default function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            {/* Sidebar */}
            <Sidebar visible={visible} position="right" onHide={() => setVisible(false)}>
                <div className={`${styles.sidebarContainer}`}>
                <h2>Sidebar Menu</h2>
                <Button label="Home" icon="pi pi-home" className={`p-button-outlined ${styles.sidebarMenuButton}`} onClick={() => window.location.href = "/"} />
                <Button label="About" icon="pi pi-info-circle" className={`p-button-outlined ${styles.sidebarMenuButton}`} onClick={() => window.location.href = "/about"} />
                <Button label="Contact" icon="pi pi-envelope" className={`p-button-outlined ${styles.sidebarMenuButton}`} onClick={() => window.location.href = "/contact"} />
                </div>
            </Sidebar>

            {/* Hamburger Button */}
            <Button 
                icon="pi pi-bars" 
                className={`p-button-rounded p-button-secondary ${styles.hamburgerButton}`}
                onClick={() => setVisible(true)} 
            />
        </div>
    );
}
