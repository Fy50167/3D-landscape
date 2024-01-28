import {
    useCharacterCustomizations,
    CameraModes,
} from '../contexts/CharacterCustomizations';
import HeadCustomizer from './HeadCustomizer';
import TopCustomizer from './HeadCustomizer';
import BottomCustomizer from './HeadCustomizer';

export default function Customizations() {
    const { cameraMode } = useCharacterCustomizations();

    return (
        <>
            {cameraMode === CameraModes.HEAD && <HeadCustomizer />}
            {cameraMode === CameraModes.TOP && <TopCustomizer />}
            {cameraMode === CameraModes.BOTTOM && <BottomCustomizer />}
        </>
    );
}
