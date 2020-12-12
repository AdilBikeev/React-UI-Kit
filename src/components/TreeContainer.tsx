import React from 'react';

import classes from '../blocks/tree.module.css'
import { TreeNode, TreeNodeObj } from './TreeNode';

interface Props {
    subNode: TreeNodeObj[]
}

export const TreeContainer: React.FC<Props> = ({
    subNode
}) => {

    return (<ul className={classes.Container}>
        {subNode.map((node, index) => (<TreeNode key={index} {...node}/>))}
    </ul>);
}
