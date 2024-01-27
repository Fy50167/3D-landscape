import { useState } from 'react';
import { useCharacterAnimations } from '../contexts/CharacterAnimations';

export default function Experience() {
    const [activeButton, setActiveButton] = useState('GuitarPlaying');

    const { animations, animationIndex, setAnimationIndex } =
        useCharacterAnimations();

    const setAnimation = (button, animation) => {
        setActiveButton(button);
        setAnimationIndex(animation);
    };

    return (
        <div className='animation-controls'>
            {animations.map((button, index) => (
                <input
                    type='button'
                    className={`btn ${activeButton == button ? 'active' : ''}`}
                    id={button}
                    key={button}
                    value={button}
                    onClick={() => setAnimation(button, index)}
                />
            ))}
        </div>
    );
}
