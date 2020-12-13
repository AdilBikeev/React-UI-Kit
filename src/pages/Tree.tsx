
import React from 'react';
import { createStyles, makeStyles, Theme } from 'material-ui-core'

import {TreeContainer} from '../components/TreeContainer'
import { TreeNodeObj } from '../components/TreeNode';
import { InfoBlock } from '../components/InfoBlock';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tree: {
        float: 'left'
    }
  })
);

export interface TreeElement {
  header: string,
  desc: string,
  subNodes?: TreeElement[]
}

const mapTreeData = (depth: number, tree?: TreeElement[]): TreeNodeObj[] | null => {
  if (!tree || depth === 20)
    return null
  depth++
  return tree.map(elem => ({
    content: <InfoBlock header={elem.header} desc={elem.desc}/>, 
    subNodes: mapTreeData(depth, elem.subNodes)
  }) as TreeNodeObj)
}

interface Props {
  tree?: TreeElement[]
}

export const Tree: React.FC<Props> = ({
  tree = require('../data/tree-data.json') as TreeElement[]
}) => {
  const customClasses = useStyles();

  let subNodes: TreeNodeObj[] = tree ? tree.map(elem => ({
    content: <InfoBlock header={elem.header} desc={elem.desc}/>, 
    subNodes: mapTreeData(0, elem.subNodes)
  } as TreeNodeObj)) : []

  return (
    <div className={customClasses.tree}>
      <div>Root</div>
      <TreeContainer subNodes={subNodes}/>
    </div>
  );
}