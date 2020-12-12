import React from 'react';

import classes from '../blocks/tree/tree.module.css'
import { TreeNode, TreeNodeObj } from './TreeNode';

interface Props {
    subNodes?: TreeNodeObj[]
}

export const TreeContainer: React.FC<Props> = ({
    subNodes
}) => {
    const countSubNodes = subNodes ? subNodes.length : 0 

    return (<ul className={classes.Container}>
        {subNodes?.map((node, index) => (<TreeNode key={index}
                                                  index={index}
                                                  isLeaf={!node.subNodes || node.subNodes.length === 0}
                                                  isLast={index === countSubNodes - 1}
                                                  {...node} />)
            )
        }
    </ul>);
}