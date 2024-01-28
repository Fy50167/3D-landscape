import { useCharacterCustomizations } from '../contexts/CharacterCustomizations';
import { CompactPicker } from 'react-color';
import { useState, useEffect } from 'react';

export default function TopCustomizer() {
    const { setTopColor } = useCharacterCustomizations();

    const [currentColor, setCurrentColor] = useState('#194D33');
    const handleOnChange = (color) => {
        setCurrentColor(color.hex);
    };

    useEffect(() => {
        setTopColor(currentColor);
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
