import { useState, useEffect } from 'react';
import Instructor from './Instructor';
import styles from './InstructorList.module.css';

const InstructorList = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const instructors = [
    {
      name: 'John Doe',
      bio: 'Experienced dance instructor with 10+ years of teaching hip-hop and contemporary dance.',
      imageUrl: 'https://example.com/john.jpg',
    },
    {
      name: 'Jane Smith',
      bio: 'Professional ballet dancer and instructor, specializing in classical ballet and modern techniques.',
      imageUrl: 'https://example.com/jane.jpg',
    },
    {
      name: 'Sarah Connor',
      bio: 'Yoga and wellness coach with a focus on mindfulness and strength training.',
      imageUrl: 'https://example.com/sarah.jpg',
    },
    {
      name: 'Michael Lee',
      bio: 'Martial arts expert with a passion for teaching self-defense and fitness.',
      imageUrl: 'https://example.com/michael.jpg',
    },
    {
      name: 'Emma Brown',
      bio: 'Fitness trainer with expertise in cardio and high-intensity interval training.',
      imageUrl: 'https://example.com/emma.jpg',
    },
    {
      name: 'John Doe',
      bio: 'Experienced dance instructor with 10+ years of teaching hip-hop and contemporary dance.',
      imageUrl: 'https://example.com/john.jpg',
    },
    {
      name: 'Jane Smith',
      bio: 'Professional ballet dancer and instructor.',
      imageUrl: 'https://example.com/jane.jpg',
    },
    {
      name: 'Sarah Connor',
      bio: 'Yoga and wellness coach with a focus on mindfulness and strength training.',
      imageUrl: 'https://example.com/sarah.jpg',
    },
    {
      name: 'Michael Lee',
      bio: 'Martial arts expert with a passion for teaching self-defense and fitness.',
      imageUrl: 'https://example.com/michael.jpg',
    },
    {
      name: 'Emma Brown',
      bio: 'Fitness trainer with expertise in cardio and high-intensity interval training.',
      imageUrl: 'https://example.com/emma.jpg',
    },
    {
      name: 'John Doe',
      bio: 'Experienced dance instructor with 10+ years of teaching hip-hop and contemporary dance.',
      imageUrl: 'https://example.com/john.jpg',
    },
    {
      name: 'Jane Smith',
      bio: 'Professional ballet dancer and instructor',
      imageUrl: 'https://example.com/jane.jpg',
    },
    {
      name: 'Sarah Connor',
      bio: 'Yoga and wellness coach with a focus on mindfulness and strength training.',
      imageUrl: 'https://example.com/sarah.jpg',
    },
    {
      name: 'Michael Lee',
      bio: 'Martial arts expert with a passion for teaching self-defense and fitness.',
      imageUrl: 'https://example.com/michael.jpg',
    },
    {
      name: 'Emma Brown',
      bio: 'Fitness trainer with expertise in cardio and high-intensity interval training.',
      imageUrl: 'https://example.com/emma.jpg',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const instructorsToShow = !isSmallScreen || showAll ? instructors : instructors.slice(0, 3);

  return (
    <>
      <div className={`${styles.instructorContainer}`}>
        {instructorsToShow.map((instructor, index) => (
          <Instructor
            key={index}
            name={instructor.name}
            bio={instructor.bio}
          />
        ))}
      </div>
      <div className={`${styles.instructorContainer}`}>
        {isSmallScreen && !showAll && (
            <button
              className={`${styles.showMoreButton}`}
              onClick={() => setShowAll(true)}
            >
              Show all instructors
            </button>
          )}
      </div>

    </>

  );
};

export default InstructorList;
