import { useState } from 'react';
import { useCharacterAnimations } from '../contexts/CharacterAnimations';
import {
    CameraModes,
    useCharacterCustomizations,
} from '../contexts/CharacterCustomizations';

export default function Experience() {
    const [activeButton, setActiveButton] = useState('GuitarPlaying');
    const [activeCamera, setActiveCamera] = useState('FREE');

    const { animations, animationIndex, setAnimationIndex } =
        useCharacterAnimations();

    const { cameraMode, setCameraMode } = useCharacterCustomizations();

    const setAnimation = (button, animation) => {
        setActiveButton(button);
        setAnimationIndex(animation);
    };

    const setCamera = (button) => {
        setActiveCamera(button);
        setCameraMode(button);
    };

    return (
        <>
            <div className='camera-controls'>
                {Object.keys(CameraModes).map((mode, index) => (
                    <input
                        type='button'
                        className={`btn ${
                            activeCamera == mode ? 'active' : ''
                        }`}
                        id={mode}
                        key={mode}
                        value={mode}
                        onClick={() => setCamera(mode)}
                    />
                ))}
            </div>
            <div className='animation-controls'>
                {animations.map((button, index) => (
                    <input
                        type='button'
                        className={`btn ${
                            activeButton == button ? 'active' : ''
                        }`}
                        id={button}
                        key={button}
                        value={button}
                        onClick={() => setAnimation(button, index)}
                    />
                ))}
            </div>
        </>
    );
}
