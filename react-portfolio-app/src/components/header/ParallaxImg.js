import { Parallax } from 'react-parallax';
import Image from '../../assets/parallax.jpg';

const ParallaxImg = () => (
    <Parallax className='image' bgImage={Image} strength={800}>
        <div className='content'>
        <span className='img-text'>Here is where you landing</span>
        </div>
    </Parallax>
);

export default ParallaxImg