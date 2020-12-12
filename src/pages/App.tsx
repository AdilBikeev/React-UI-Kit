import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button, createStyles, makeStyles, Theme } from 'material-ui-core'
import { NavLink } from 'react-router-dom'

import logo from './../ui/nii-center.png'
import { RouteMap } from './../pages/Router';
import { Tree } from './../pages/Tree';
import { NiiCentreColor } from '../common/color.base'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
     
    },
    app__nav: {
      backgroundColor: NiiCentreColor.nav_bg,
      height: '4rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontSize: 'calc(10px + 2vmin)',
    },
    app__nav_item: {
      padding: theme.spacing(2),
      color: NiiCentreColor.nav__item,
      backgroundColor: NiiCentreColor.nav__item_bg,
      fontWeight: 'bold',
      '&:hover': {
        color: NiiCentreColor.nav__item_hover,
        backgroundColor: NiiCentreColor.nav__item_hover_bg,
      }
    },
    app__main_image: {
      maxWidth: '100%',
      height: 'auto',
      textAlign: 'center'
    }
  })
);

export const App: React.FC = () => {
  const classes = useStyles();
  const navItems: NavItem[] = [
    { navTo: RouteMap.main, text: 'Main' },
    { navTo: RouteMap.Tree, text: 'Tree' },
  ]

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <nav className={classes.app__nav}>
          {navItems.map(item => <Button
            key={item.navTo}
            className={classes.app__nav_item}
            component={NavLink}
            to={`${item.navTo}`}
          >{item.text}</Button>)}
        </nav>
        <Switch>
          <Route exact path={`${RouteMap.main}`}
            render={() => (<div className={classes.app__main_image}>
              <img src={logo} alt='react' />
            </div>)} />
          <Route exact path={`${RouteMap.Tree}`}
            render={() => <Tree />} />
        </Switch>
      </div>
    </BrowserRouter>

  )
}

export interface NavItem {
  navTo: string,
  text: string
}