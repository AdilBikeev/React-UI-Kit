﻿
import React from 'react';
import { createStyles, makeStyles, Theme } from 'material-ui-core'

import {TreeContainer} from '../components/TreeContainer'
import { TreeNodeObj } from '../components/TreeNode';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tree: {
        float: 'left'
    }
  })
);

export const Tree: React.FC = () => {
  const customClasses = useStyles();

  const subNodes: TreeNodeObj[] = [
    { content: 'Item 1', subNodes: [
      { content: 'Item 1.1' },
      { content: 'Item 1.2' }
    ] },
    { content: 'Item 2', subNodes: [
      { content: 'Item 2.1' },
      { content: 'Item 2.2' },
      { content: 'Item 2.3' },
      { content: 'Item 2.4' }
    ]},
    { content: 'Item 3' }
  ] 

  return (
    <div className={customClasses.tree}>
      <div>Root</div>
      <TreeContainer subNodes={subNodes}/>
    </div>
  );
}