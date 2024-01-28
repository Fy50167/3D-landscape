import {
    useCharacterCustomizations,
    CameraModes,
} from '../contexts/CharacterCustomizations';
import HeadCustomizer from './HeadCustomizer';
import TopCustomizer from './TopCustomizer';
import BottomCustomizer from './BottomCustomizer';

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
