import React, {useEffect} from 'react';
import Clock from "react-live-clock";

import {useDispatch, useSelector} from "react-redux";
import {setInstrument, setTimeStamp} from "../../store/trading/action-creators";
import {selectExchangeRates, selectInstrument, selectTimeStamp} from "../../store/trading/selectors";
import {setOrder} from "../../store/archive/action-creators";

import './styles.scss'
import {updateRates} from "../../store/trading/actions";

const TradingPanel = ({onOpen}) => {

    const dispatch = useDispatch();
    const rates = useSelector(selectExchangeRates);
    const selectedInstrument = useSelector(selectInstrument);
    const timeStamp = useSelector(selectTimeStamp);

    useEffect(() => {
        dispatch(updateRates());
    },[timeStamp]);

    function openBuyOrderHandler () {
        onOpen();
        dispatch(setOrder(
            {
                side: 'BUY',
                price: rates[selectedInstrument.pair][selectedInstrument.instrument].buy,
                instrument: `${selectedInstrument.pair}_${selectedInstrument.instrument}`,
                time: timeStamp,
            })
        )
    }
    function openSellOrderHandler () {
        onOpen();
        dispatch(setOrder(
            {
                side: 'SELL',
                price: rates[selectedInstrument.pair][selectedInstrument.instrument].sell,
                instrument: `${selectedInstrument.pair}_${selectedInstrument.instrument}`,
                time: timeStamp,
            })
        )
    }
    function handleSelectInstrument (event) {
        let select = event.target.value.split('_')
        dispatch(setInstrument({
            pair: select[0],
            instrument: select[1],
        }))
    }

    return (
        <div className='panel'>
            <Clock className='panel__clock' format={'HH:mm:ss'} ticking={true} onChange={date => dispatch(setTimeStamp(date))}/>
            <select
                className='panel__select'
                onChange={handleSelectInstrument}
            >
                {Object.keys(rates).map(pair =>
                    Object.keys(rates[pair]).map(instrument =>
                         <option
                             key={instrument}
                         >
                            {`${pair}_${instrument}`}
                         </option>
                        )
                )}
            </select>
            {selectedInstrument.pair &&
                <div className='panel__buttons'>
                    <div className='panel__button' onClick={openBuyOrderHandler}>
                        <div className='BUY'>BUY</div>
                        <div className='BUY'>{rates?.[selectedInstrument.pair]?.[selectedInstrument.instrument]?.buy}</div>
                    </div>
                    <div className='panel__button' onClick={openSellOrderHandler}>
                        <div className='SELL'>SELL</div>
                        <div className='SELL'>{rates?.[selectedInstrument.pair]?.[selectedInstrument.instrument]?.sell}</div>
                    </div>
                </div>}
        </div>
    );
};

export default TradingPanel;