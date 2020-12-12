import React, { useState } from 'react';
import clsx from 'clsx'

import classes from '../blocks/tree/tree.module.css'
import { TreeContainer } from './TreeContainer';

interface Props {
    index: number,
}

export interface TreeNodeObj {
    content: HTMLElement | string
    subNodes?: TreeNodeObj[]
}

/**
 * Узел дерева
 * @param key Индекс узла
 * @param content Контент узла
 * @param subNodes Дочерние узлы
 */
export const TreeNode: React.FC<TreeNodeObj & Props> = ({
    index,
    content,
    subNodes
}) => {

    /* TODO: Поменять на единый обработчик для всех элементов через Redux или Effector  */
    const [isExpanded, setExpanded] = useState(false)
    const isRoot = index === 0
    const isLeaf = !subNodes || subNodes.length === 0

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
            !isLeaf ? <TreeContainer subNodes={subNodes} /> : <></>
        }
    </li>);
}
