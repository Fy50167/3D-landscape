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

    return (
        <CharacterCustomizationsContext.Provider
            value={{
                cameraMode,
                setCameraMode,
            }}
        >
            {props.children}
        </CharacterCustomizationsContext.Provider>
    );
};

export const useCharacterCustomizations = () => {
    return useContext(CharacterCustomizationsContext);
};
