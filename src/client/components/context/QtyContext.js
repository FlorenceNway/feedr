import React, { useState, useEffect, createContext } from 'react';
import itemApi from '../../Api/item.api';

export const QtyContext = createContext();

export const QtyProvider = (props) => {
    const [qty, setQty] = useState();
    const [dietaries, setDietaries] = useState();
    console.log('Context qty', qty)

    const getPreviewItemsQty = async () => {
        const response = await itemApi.getPreviewItems();
        console.log(response)
        setQty(response.length)
    }

    useEffect(() => {
        getPreviewItemsQty();
    }, [])

    return (
        <QtyContext.Provider value={{qty, setQty}}>
            {props.children}
        </QtyContext.Provider>);
}