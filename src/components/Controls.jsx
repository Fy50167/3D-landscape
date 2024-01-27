import { useState } from 'react';
import Button from './Button';

export default function Experience() {
    const animations = [
        'Animation 1',
        'Animation 2',
        'Animation 3',
        'Animation 4',
    ];

    return (
        <div className='animation-controls'>
            <button className='btn'>Animation 2</button>
            <button className='btn'>Animation 3</button>
            <button className='btn'>Animation 4</button>
        </div>
    );
}
