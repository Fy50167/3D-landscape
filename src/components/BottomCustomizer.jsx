import { useCharacterCustomizations } from '../contexts/CharacterCustomizations';
import { CompactPicker } from 'react-color';
import { useState, useEffect } from 'react';

export default function BottomCustomizer() {
    const { pantsColor, setPantsColor } = useCharacterCustomizations();

    const [currentColor, setCurrentColor] = useState('#009CE0');
    const handleOnChange = (color) => {
        setCurrentColor(color.hex);
    };

    useEffect(() => {
        setPantsColor(currentColor);
    }, [currentColor]);

    return (
        <>
            <div className='customizer-div pants'>
                <CompactPicker
                    color={currentColor}
                    onChangeComplete={handleOnChange}
                />
            </div>
        </>
    );
}
