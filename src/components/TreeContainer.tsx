import React from 'react';

import classes from '../blocks/tree/tree.module.css'
import { TreeNode, TreeNodeObj } from './TreeNode';

interface Props {
    subNodes?: TreeNodeObj[]
}

export const TreeContainer: React.FC<Props> = ({
    subNodes
}) => {

    return (<ul className={classes.Container}>
        {subNodes?.map((node, index) => (<TreeNode key={index}
                                                  index={index}
                                                  {...node} />)
            )
        }
    </ul>);
}
