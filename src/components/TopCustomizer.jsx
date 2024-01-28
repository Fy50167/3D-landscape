import { useCharacterCustomizations } from '../contexts/CharacterCustomizations';
import { CompactPicker } from 'react-color';
import { useState, useEffect } from 'react';

export default function TopCustomizer() {
    const { shirtColor, setShirtColor } = useCharacterCustomizations();

    const [currentColor, setCurrentColor] = useState('#4D4D4D');
    const handleOnChange = (color) => {
        setCurrentColor(color.hex);
    };

    useEffect(() => {
        setShirtColor(currentColor);
        console.log(shirtColor);
    }, [currentColor]);

    return (
        <>
            <div className='customizer-div shirt'>
                <CompactPicker
                    color={currentColor}
                    onChangeComplete={handleOnChange}
                />
            </div>
        </>
    );
}
