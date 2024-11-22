import { useRef, useState } from 'react';
import PrimeComponents from '../../common/PrimeReactComponents';
import { Toast } from 'primereact/toast';
import styles from './News.module.css';
import Carousel from '../Carousel/Carousel';

const News = () => {    
    const [email, setEmail] = useState('');
    
    const toast = useRef<Toast>(null);

    const handleSubscribe = () => {
        if (email.includes('@')) {
            toast.current?.show({
                severity: 'success',
                summary: 'Subscribed',
                detail: 'You have successfully subscribed to the newsletter!',
                life: 3000,
            });
            setEmail('');
        } else {
            toast.current?.show({
                severity: 'error',
                summary: 'Invalid Email',
                detail: 'Please enter a valid email address.',
                life: 3000,
            });
        }
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.carouselWrapper}`}>
                <Carousel/>
            </div>
            <PrimeComponents.Toast ref={toast} />
            <PrimeComponents.Card title="Subscribe to our Newsletter" className={`${styles.card}`}>
                <p className={`${styles.description}`}>
                    Stay updated with our latest news, articles, and promotions by subscribing to our newsletter.
                </p>
                <div className={`${styles.inputContainer}`}>
                    <PrimeComponents.InputText
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className={`${styles.input}`}
                    />
                    <PrimeComponents.Button label="Subscribe" icon="pi pi-envelope" onClick={handleSubscribe} />
                </div>
            </PrimeComponents.Card>
        </div>
    );
}

export default News