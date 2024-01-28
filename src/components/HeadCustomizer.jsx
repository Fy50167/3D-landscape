import { useCharacterCustomizations } from '../contexts/CharacterCustomizations';
import { CompactPicker } from 'react-color';
import { useState, useEffect } from 'react';

export default function HeadCustomizer() {
    const { hairColor, setHairColor } = useCharacterCustomizations();

    const [currentColor, setCurrentColor] = useState('#4D4D4D');
    const handleOnChange = (color) => {
        setCurrentColor(color.hex);
    };

    useEffect(() => {
        setHairColor(currentColor);
    }, [currentColor]);

    return (
        <>
            <div className='customizer-div'>
                <CompactPicker
                    color={currentColor}
                    onChangeComplete={handleOnChange}
                />
            </div>
        </>
    );
}
