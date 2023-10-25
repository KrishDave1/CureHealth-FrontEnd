import React from 'react';
import { createBoard } from '@wixc3/react-board';
import VideoCalling from '../../../components/VideoCalling.jsx';

export default createBoard({
    name: 'VideoCalling',
    Board: () => <VideoCalling />,
    isSnippet: true,
});
