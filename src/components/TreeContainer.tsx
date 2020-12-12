import React from 'react';
import { createStyles, makeStyles, Theme } from 'material-ui-core'
import clsx from 'clsx'

import classes from '../blocks/tree.module.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tree_container: {
            
        }
    })
);

interface Props {
    
}

export const TreeContainer: React.FC = () => {
    const customClasses = useStyles();

    return (<ul className={classes.Container}>
        <li>

        </li>
    </ul>);
}
