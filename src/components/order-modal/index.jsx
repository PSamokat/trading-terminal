import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {selectOrder, selectVolume} from "../../store/archive/selectors";
import {setArchive, setVolume} from "../../store/archive/action-creators";

import './styles.scss'

const OrderModal = ({onClose}) => {

    const order = useSelector(selectOrder);
    const volume = useSelector(selectVolume);
    const dispatch = useDispatch();

    function makeOrder() {
        onClose();
        dispatch(setArchive({
            ...order,
            volume: volume,
        }))
        dispatch(setVolume(''))
    }

    function handleVolumeChange (event) {
        dispatch(setVolume(event.target.value));
    }


 return(
     <div className='modal'>
         <div className="modal__content" onClick={(event)=> event.stopPropagation()}>
             <div className="modal__header">
                 <div className="modal__title">Make order</div>
                 <div className='modal__X' onClick={onClose}>X</div>
             </div>
             <div className='modal__order'>
                 <div className={`${order.side}`} >{order.side}</div>
                 <div>{order.price}</div>
                 <div>{order.instrument}</div>
             </div>
             <div className='modal__volume'>
                 <div>Volume</div>
                 <input autoFocus type='text' value={volume} onChange={handleVolumeChange}/>
             </div>
             <div className='modal__buttons'>
                 <button className="modal__buttons--ok" onClick={makeOrder}>OK</button>
                 <button className='modal__buttons--close' onClick={onClose}>Close</button>
             </div>
         </div>
     </div>
 )
}

export default OrderModal;