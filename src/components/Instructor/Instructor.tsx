import React from 'react'
import styles from './Instructor.module.css'
import frankImage from '../../assets/images/frank.png'; // Import the image
import useMouseSwaying from '../../hooks/mouseSwayHook';

// Define the interface for the props
interface InstructorsProps {
    name: string;
    bio: string;
    imageUrl: string;
}

const Instructor = ({name, bio, imageUrl}: InstructorsProps) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useMouseSwaying();

  return (
    <div
      className={`${styles.cardContainer}`}
      onMouseMove={handleMouseMove}   // Attach mouse move event
      onMouseLeave={handleMouseLeave} // Reset on mouse leave
    >
      <div
        className={`${styles.card}`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, // Apply the rotation
        }}
      >
        <div className={`${styles.cardContent}`}>
          <img
            src={frankImage}
            alt="Card Image"
            className={`${styles.cardImage}`}
          />
          <h2 className={`${styles.cardTitle}`}>{name}</h2>
          <p className={`${styles.cardDescription}`}>
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instructor