import PrimeComponents from '../../common/PrimeReactComponents'
import styles from './Carousel.module.css'

// Define the interface for slider items
interface SliderItem {
    imageUrl: string;
    title: string;
    description: string;
    link: string;
}

// Example data for the slider, typed with SliderItem interface
const sliderData: SliderItem[] = [
    {
      imageUrl: 'https://via.placeholder.com/500',
      title: 'Slide 1',
      description: 'This is the description for slide 1.',
      link: '#',
    },
    {
      imageUrl: 'https://via.placeholder.com/500',
      title: 'Slide 2',
      description: 'This is the description for slide 2.',
      link: '#',
    },
    {
      imageUrl: 'https://via.placeholder.com/500',
      title: 'Slide 3',
      description: 'This is the description for slide 3.',
      link: '#',
    },
  ];
  
  // Custom slide content template
  const slideTemplate = (item: SliderItem) => {
    return (
      <div className={`${styles.sliderItem}`}>
        <img src={item.imageUrl} alt={item.title} className={`${styles.sliderImage}`} />
        <div className={`${styles.sliderContent}`}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <PrimeComponents.Button label="Read More" icon="pi pi-arrow-right" onClick={() => window.location.href = item.link} />
        </div>
      </div>
    );
  };

const Carousel = () => {
  return (
    <div className={`${styles.sliderContainer}`}>
      {/* Correctly pass the necessary props to the Carousel */}
      <PrimeComponents.Carousel 
        value={sliderData} 
        itemTemplate={slideTemplate} 
        numVisible={1} 
      />
    </div>
  )
}

export default Carousel