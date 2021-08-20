import React, {useEffect, useState, useContext} from 'react';
import itemsApi from '../../Api/item.api';
import SideMenu from '../menu/SideMenu';

const Menu = () => {

    const [items, setItems] = useState([])
    const [previewItems, setPreviewItems] = useState([])

    const callItemsApi = async () => {
        const response = await itemsApi.getItems();
        setItems(response.items)
    }
    const callPreviewItemsApi = async () => {
        const response = await itemsApi.getPreviewItems();
        console.log('firstLoad:', response)
        setPreviewItems(response)
    }

    useEffect(() => {
        callItemsApi();
        callPreviewItemsApi();
    }, [])

    
    return (
        <div className="container menu-builder">
            <div className="row">
                <SideMenu items={items} previewItems={previewItems} />
            </div>
        </div> 
    );
};

export default Menu;