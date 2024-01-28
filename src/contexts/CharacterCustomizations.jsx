import { createContext, useContext, useState } from 'react';

const CharacterCustomizationsContext = createContext({});

export const CameraModes = {
    FREE: 'FREE',
    HEAD: 'HEAD',
    TOP: 'TOP',
    BOTTOM: 'BOTTOM',
};

export const CharacterCustomizationsProvider = (props) => {
    const [cameraMode, setCameraMode] = useState(CameraModes.FREE);
    const [currentCamera, setCurrentCamera] = useState(CameraModes.FREE);
    const [hairColor, setHairColor] = useState();
    const [shirtColor, setShirtColor] = useState();
    const [pantsColor, setPantsColor] = useState();
    const [shoesColor, setShoesColor] = useState();

    const setNewCamera = (camera) => {
        setCurrentCamera(cameraMode);
        setCameraMode(camera);
    };

    return (
        <CharacterCustomizationsContext.Provider
            value={{
                cameraMode,
                currentCamera,
                setNewCamera,
                hairColor,
                setHairColor,
                setShirtColor,
                setPantsColor,
            }}
        >
            {props.children}
        </CharacterCustomizationsContext.Provider>
    );
};

export const useCharacterCustomizations = () => {
    return useContext(CharacterCustomizationsContext);
};
