import React, { useState } from 'react';
import clsx from 'clsx'

import classes from '../blocks/tree.module.css'
import { TreeContainer } from './TreeContainer';

export interface TreeNodeObj {
    isRoot?: boolean,
    isLeaf?: boolean,
    content: HTMLElement
    subNode?: TreeNodeObj[]
}

/**
 * Узел дерева
 * @param isRoot Укказывает явлется ли узел корневым 
 * @param isLeaf Укказывает явлется ли узел листом 
 * @param content Контент узла
 * @param subNode Дочерние узлы
 */
export const TreeNode: React.FC<TreeNodeObj> = ({
    isRoot,
    isLeaf,
    content,
    subNode
}) => {

    /* TODO: Поменять на единый обработчик для всех элементов через Redux или Effector  */
    const [isExpanded, setExpanded] = useState(false)

    return (<li className={clsx(classes.Node, {
        [classes.isRoot]: isRoot,
        [classes.ExpandClosed]: !isLeaf && !isExpanded,
        [classes.ExpandOpen]: !isLeaf && isExpanded,
        [classes.ExpandLeaf]: isLeaf,
        [classes.IsLast]: isLeaf,
    })}>
        <div className={classes.Expand} onClick={() => setExpanded(!isExpanded)}></div>
        <div className={classes.Content}>{content}</div>
        {
            (subNode && subNode.length !== 0 ? <TreeContainer subNode={subNode} /> : <></>)
        }
    </li>);
}
