import React from 'react';
import Clock from "react-live-clock";

import './styles.scss';

const ArchiveTable = ({order}) => {
    return (
        <div className='table__item'>
            <div className={`table__side ${order.side}`}>{order.side}</div>
            <div className='table__price'>{order.price}</div>
            <div className='table__instrument'>{order.instrument}</div>
            <div className='table__volume'>{order.volume}</div>
            <Clock className='table__time' format={'YYYY.MM.DD HH:mm:ss.SSS'} date={order.time}/>
        </div>
    );
};

export default ArchiveTable;