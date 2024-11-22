import styles from './Parallax.module.css';
import foregroundImage from '../../assets/images/kinjazForeground.png'
import useParallax from "../../hooks/parallaxHook";

const Parallax = () => {  
    return (
      <div className={`${styles.parallaxContainer}`}>
        {/* Background Image (fixed position) */}
        <div className={`${styles.background}`}
        >

        </div>

        <div className={`${styles.textLayer}`}           
        style={{
            textAlign: 'center',
            transform: `translateY(${useParallax(0.1,0.25,0.3)}px)`,
            }}>
            <h1>
                Elevate your dance
            </h1>
            <h2>Join now</h2>
            <h3>Two free trials for any class</h3>
        </div>

        {/* Foreground Image (moves faster with scroll) */}
        <img
          className={`${styles.foreground}`}
          src={foregroundImage} // Path to your foreground image
          alt="Foreground"
          style={{
            transform: `translateY(${useParallax(0.2,0.3,0.3)}px)`,
          }}
        />
      </div>
    );
};

export default Parallax