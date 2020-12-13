
import React from 'react';
import { createStyles, makeStyles, Theme } from 'material-ui-core'

import { InfoBlockColor } from '../common/color.base'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        infoBlock: {
            color: InfoBlockColor.text
        },
        infoBlock__header : {
            textAlign: 'center',
            borderRadius: '1rem 1rem 0% 0%',
            backgroundColor: InfoBlockColor.header_bg
        },
        infoBlock__desc : {
            backgroundColor: InfoBlockColor.desc_bg,
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