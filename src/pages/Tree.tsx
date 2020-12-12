
import React from 'react';
import { createStyles, makeStyles, Theme } from 'material-ui-core'
import clsx from 'clsx'

import classes from '../blocks/tree.module.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tree: {
        float: 'left'
    }
  })
);

export const Tree: React.FC = () => {
  const customClasses = useStyles();

  return (
    <div className={customClasses.tree} onClick={e => tree_toggle(e)}>
      <div>Root</div>
      <ul className={classes.Container}>
        <li className={clsx(classes.Node,
          classes.IsRoot,
          classes.ExpandClosed)}>
          <div className={classes.Expand}></div>
          <div className={classes.Content}>Item 1</div>
          <ul className={classes.Container}>
            <li className={clsx(classes.Node,
              classes.ExpandClosed)}>
              <div className={classes.Expand}></div>
              <div className={classes.Content}>Item 1.1</div>
              <ul className={classes.Container}>
                <li className={clsx(classes.Node,
                  classes.ExpandLeaf,
                  classes.IsLast)}>
                  <div className={classes.Expand}></div>
                  <div className={classes.Content}>Item 1.1.2</div>
                </li>
              </ul>
            </li>
            <li className={clsx(classes.Node,
              classes.ExpandLeaf,
              classes.IsLast)}>
              <div className={classes.Expand}></div>
              <div className={classes.Content}>Item 1.2</div>
            </li>
          </ul>
        </li>
        <li className={clsx(classes.Node,
          classes.IsRoot,
          classes.ExpandClosed)}>
          <div className={classes.Expand}></div>
          <div className={classes.Content}>Item 2<br />title long yeah</div>
          <ul className={classes.Container}>
            <li className={clsx(classes.Node,
              classes.ExpandLeaf,
              classes.IsLast)}>
              <div className={classes.Expand}></div>
              <div className={classes.Content}>Item 2.1</div>
            </li>
          </ul>
        </li>
        <li className={clsx(classes.Node,
          classes.ExpandOpen,
          classes.IsRoot,
          classes.IsLast)}>
          <div className={classes.Expand}></div>
          <div className={classes.Content}>Item 3</div>
          <ul className={classes.Container}>
            <li className={clsx(classes.Node,
              classes.ExpandLeaf,
              classes.IsLast)}>
              <div className={classes.Expand}></div>
              <div className={classes.Content}>Item 3.1</div>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  );
}


function tree_toggle(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  debugger;
  console.log(typeof (event));
  event = event || window.event
  var clickedElem = event.target || event.view.document

  if (!hasClass(clickedElem, 'Expand')) {
    return // клик не там
  }

  // Node, на который кликнули
  var node = event.view.document.parentNode
  if (hasClass(node, 'ExpandLeaf')) {
    return // клик на листе
  }

  // определить новый класс для узла
  var newClass = hasClass(node, 'ExpandOpen') ? 'ExpandClosed' : 'ExpandOpen'
  // заменить текущий класс на newClass
  // регексп находит отдельно стоящий open|close и меняет на newClass
  var re = /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/
  //node.className = node.className.replace(re, '$1' + newClass + '$3')
}


function hasClass(elem: any, className: string) {
  return new RegExp("(^|\\s)" + className + "(\\s|$)").test(elem.className)
}