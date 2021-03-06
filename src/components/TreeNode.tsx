﻿import React, { useState } from 'react';
import clsx from 'clsx'

import classes from '../blocks/tree/tree.module.css'
import { TreeContainer } from './TreeContainer';

interface Props {
    index: number,
    isLeaf: boolean,
    isLast: boolean,
}

export interface TreeNodeObj {
    content: React.ReactElement | string
    subNodes?: TreeNodeObj[]
}

/**
 * Узел дерева
 * @param index Индекс узла
 * @param isLeaf Указывает, что узел является листом 
 * @param isLast Указывает, что узел является последним
 * @param content Контент узла
 * @param subNodes Дочерние узлы
 */
export const TreeNode: React.FC<TreeNodeObj & Props> = ({
    index,
    isLeaf,
    isLast,
    content,
    subNodes
}) => {

    /* TODO: Поменять на единый обработчик для всех элементов через Redux или Effector  */
    const [isExpanded, setExpanded] = useState(false)
    const isRoot = index === 0

    return (<li className={clsx(classes.Node, {
        [classes.IsRoot]: isRoot,
        [classes.ExpandClosed]: !isLeaf && !isExpanded,
        [classes.ExpandOpen]: !isLeaf && isExpanded,
        [classes.ExpandLeaf]: isLeaf,
        [classes.IsLast]: isLeaf && isLast,
        [classes.IsMiddle]: isLeaf && !isLast,
    })}>
        <div className={classes.Expand} onClick={() => setExpanded(!isExpanded)}></div>
        <div className={classes.Content}>{content}</div>
        {
            !isLeaf ? <TreeContainer subNodes={subNodes} /> : <></>
        }
    </li>);
}
