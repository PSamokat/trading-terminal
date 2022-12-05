import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import './app.scss';
import TradingPanel from "./trading-panel";
import ArchivePanel from "./archive-panel";
import OrderModal from "./order-modal";
import {useModal} from "../hooks/modal";
import Navbar from "./navigation";


const App = () => {
    const orderModal = useModal();
    return (
        <BrowserRouter>
            <div className='container'>
                <Navbar/>
                <div className='wrap'>
                    <Routes>
                        <Route  path='/trading' element={<TradingPanel onOpen={orderModal.handleModalOpen}/>}/>
                        <Route  path='/archive' element={<ArchivePanel/>}/>
                        <Route path="*" element={<Navigate to="/trading" />} />
                    </Routes>
                    {orderModal.isModalVisible && (
                        <OrderModal onClose={orderModal.handleModalClose}/>
                        )
                    }
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;