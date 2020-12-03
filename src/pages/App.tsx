import React from 'react'
import logo from './../ui/nii-center.png'
import { RouteMap } from './../pages/Router';
import { Tree } from './../pages/Tree';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button, createStyles, makeStyles, Theme } from 'material-ui-core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      textAlign: 'center'
    },
    app__nav: {
      backgroundColor: '#202327',
      height: '4rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontSize: 'calc(10px + 2vmin)',
    },
    app__nav_item: {
      padding: theme.spacing(2),
      color: '#868D9A',
      fontWeight: 'bold',
      backgroundColor: '#282C34',
      '&:hover': {
        backgroundColor: '#7F889A',
        color: '#282C34',
      }
    },
    app__main_image: {
      maxWidth: '100%',
      height: 'auto'
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
            render={() => <img src={logo} className={classes.app__main_image} alt='react' />} />
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