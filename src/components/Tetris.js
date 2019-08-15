import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartBtn from './StartBtn';

const Tetris = () => {
    return(
        <div>
            <Stage />
            <aside>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
            </aside>
        </div>
    )
}