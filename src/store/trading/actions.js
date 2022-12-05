import {setExchangeRates} from './action-creators'

export function updateRates () {
    return dispatch => {
        try {
            const response = {
                data: {
                    'USD/RUB': {
                        TOD: {
                            buy: 0, sell: 0,
                        },
                        TOM: {
                            buy: 0, sell: 0,
                        },
                    },
                    'EUR/RUB': {
                        TOD: {
                            buy: 0, sell: 0,
                        },
                        TOM: {
                            buy: 0, sell: 0,
                        },
                    },
                    'CAD/RUB': {
                        TOD: {
                            buy: 0, sell: 0,
                        },
                        TOM: {
                            buy: 0, sell: 0,
                        },
                    },
                }
            }
            for (let rate in response.data) {
                response.data[rate].TOD.buy = randomValue(50, 55);
                response.data[rate].TOD.sell = randomValue(55, 60);
                response.data[rate].TOM.buy = randomValue(50, 55);
                response.data[rate].TOM.sell = randomValue(55, 60);
            }

            dispatch(setExchangeRates(response.data));

        }
        catch (e) {
            console.log(e?.response?.data?.message);
        }
    }
}

function randomValue(min, max) {
    let rand = min + Math.random() * (max - min);
    return rand.toFixed(4);
}