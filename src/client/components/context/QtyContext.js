import React, { useState, useEffect, createContext } from 'react';
import itemApi from '../../Api/item.api';

export const QtyContext = createContext();

export const QtyProvider = (props) => {
    const [qty, setQty] = useState();
    const [prevItems, setPrevItems] = useState();

    const getPreviewItemsQty = async () => {
        const previewItems = await itemApi.getPreviewItems();
        console.log(previewItems)
        setPrevItems(previewItems)
        setQty(previewItems.length)
    }

    useEffect(() => {
        getPreviewItemsQty();
    }, [])

    return (
        <QtyContext.Provider value={{qty, setQty, prevItems, setPrevItems}}>
            {props.children}
        </QtyContext.Provider>);
}