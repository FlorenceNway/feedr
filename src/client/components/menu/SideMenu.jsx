import React, {useState, useEffect, useContext} from 'react';
import itemApi from '../../Api/item.api';
import PreviewMenu from './PreviewMenu';
import SearchInput from './SearchInput';
import { QtyContext } from '../context/QtyContext';

const SideMenu = ({items, previewItems}) => {
    const [localItems, setLocalItems] = useState(items)
    const [searchItem, setSearchItem] = useState()
    const [previewMenu, setPreviewMenu] = useState(previewItems)

    const {setQty} = useContext(QtyContext);

    useEffect(()=> {
        setLocalItems(items);
        setPreviewMenu(previewItems);
    },[items, previewItems])

    const addPreviewMenu = async (id) => {
        const selected_item = items.find(item => id === item.id);
        const response = await itemApi.postPreviewItems(selected_item);
        if(response) {
            setPreviewMenu([...previewMenu,response]);
            setQty(previewMenu.length);
        }
    }

    useEffect(()=> {
        const searchItems = items.filter(item => item.name.toLowerCase().match(searchItem.toLowerCase()));
        setLocalItems(searchItems);
    },[searchItem])

    return  (
        <>
        <div className="col-4">
            <SearchInput setSearchItem={setSearchItem} />
            <ul className="item-picker">
                {localItems.map(item => (
                    <li data-testid={item.id} key={`add-${item.id}`} className="item" onClick={() => addPreviewMenu(item.id)}>
                        <h2>{item.name}</h2>
                        <p>
                            {item.dietaries.map(dietary => 
                                <span key={dietary} className="dietary">{dietary}</span>
                            )}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
        <PreviewMenu previewMenu = {previewMenu} setPreviewMenu={setPreviewMenu}/>
        </>
    );
};

export default SideMenu;