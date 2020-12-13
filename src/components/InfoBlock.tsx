
import React from 'react';
import { createStyles, makeStyles, Theme } from 'material-ui-core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        infoBlock: {
            color: '#50c8ef'
        },
        infoBlock__header : {
            textAlign: 'center',
            borderRadius: '1rem 1rem 0% 0%',
            backgroundColor: '#0284C3'
        },
        infoBlock__desc : {
            backgroundColor: '#266F92',
            borderRadius: '0% 0% 1rem 1rem',
            textAlign: 'center',
            padding: theme.spacing(1)
        }
    })
);

interface Props {
    header: string,
    desc: string
}

/**
 * Компонента для вывода краткой информации по блоку
 * @param header Заголовок блока
 * @param desc Описание блока
 */
export const InfoBlock: React.FC<Props> = ({
    header,
    desc
}) => {
    const customClasses = useStyles();

    return (
        <div className={customClasses.infoBlock}>
            <div className={customClasses.infoBlock__header}>{header}</div>
            <div className={customClasses.infoBlock__desc}>{desc}</div>
        </div>
    );
}