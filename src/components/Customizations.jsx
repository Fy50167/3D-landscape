import {
    useCharacterCustomizations,
    CameraModes,
} from '../contexts/CharacterCustomizations';

export default function Customizations() {
    const { cameraMode } = useCharacterCustomizations();

    return <></>;
}
