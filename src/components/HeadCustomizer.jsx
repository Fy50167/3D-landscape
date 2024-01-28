import {
    SwatchesColors,
    useCharacterCustomizations,
} from '../contexts/CharacterCustomizations';
import { CompactPicker } from 'react-color';

export default function HeadCustomizer() {
    const {
        hairColor,
        setHairColor,
        morphTargetDictionary,
        morphTargetInfluences,
        setMorphTargetInfluences,
    } = useCharacterCustomizations();

    return (
        <>
            <div className='customizer-div'>
                <CompactPicker value={hairColor} onChange={setHairColor} />
            </div>
        </>
    );
}
