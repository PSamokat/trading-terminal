import React from 'react';
import ArchiveTable from "../archive-table";
import {useSelector} from "react-redux";
import {selectArchive} from "../../store/archive/selectors";

import './styles.scss'

const ArchivePanel = () => {
    const archive = useSelector(selectArchive);
    const archiveTable = archive.map(order => <ArchiveTable key={order.time} order={order}/>);

    return (
        <div className='table'>
            <div className='table__item header'>
                <div className='table__side'>Side</div>
                <div className='table__price'>Price</div>
                <div className='table__instrument'>Instrument</div>
                <div className='table__volume'>Volume</div>
                <div className='table__time'>Timestamp</div>
            </div>
            {archiveTable}
        </div>
    );
};

export default ArchivePanel;