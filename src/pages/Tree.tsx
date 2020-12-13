
import React from 'react';
import { createStyles, makeStyles, Theme } from 'material-ui-core'

import { TreeContainer } from '../components/TreeContainer'
import { TreeNodeObj } from '../components/TreeNode';
import { InfoBlock } from '../components/InfoBlock';

import { InfoBlockColor } from '../common/color.base'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tree: {

    },
    tree__header: {
      paddingTop: theme.spacing(10),
      textAlign: 'center',
      color: InfoBlockColor.text
    },
    tree__body: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      margin: '5% 0'
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
    content: <InfoBlock header={elem.header} desc={elem.desc} />,
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
    content: <InfoBlock header={elem.header} desc={elem.desc} />,
    subNodes: mapTreeData(0, elem.subNodes)
  } as TreeNodeObj)) : []

  return (<div className={customClasses.tree}>
    <h1 className={customClasses.tree__header}>Tree</h1>
    <div className={customClasses.tree__body}>
      <TreeContainer subNodes={subNodes} />
      <TreeContainer subNodes={subNodes} />
      <TreeContainer subNodes={subNodes} />
    </div>
  </div> );
}