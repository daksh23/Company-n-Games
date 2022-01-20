import React from 'react'
import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import HorizontalScroll from 'react-horizontal-scrolling'

const puzzlePis = [
    'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.' +
            'jpg',
    'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.' +
            'jpg',
    'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.' +
            'jpg',
    'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.' +
            'jpg'
];

function PuzzleSolver(props) {

    return (
        <Box
            sx={{
            height: '100%',
            backgroundColor: 'primary.dark'
        }}>
            <HorizontalScroll>
                {puzzlePis.map((pic, idx) => (<img className="rounded w-56 h-64 object-cover" src={pic} key={idx}/>))}
            </HorizontalScroll>
        </Box>
    )
}

export default PuzzleSolver
