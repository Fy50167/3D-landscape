import { useState } from 'react';

export default function Experience() {
    const [activeButton, setActiveButton] = useState('');
    const animations = [
        'Animation 1',
        'Animation 2',
        'Animation 3',
        'Animation 4',
    ];

    return (
        <div className='animation-controls'>
            {animations.map((button) => (
                <input
                    type='button'
                    className={`btn ${activeButton == button ? 'active' : ''}`}
                    id={button}
                    key={button}
                    value={button}
                    onClick={() => setActiveButton(button)}
                />
            ))}
        </div>
    );
}
