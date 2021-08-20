import React, {useEffect, useState, useContext} from 'react';
import itemApi from '../../Api/item.api';
import { QtyContext } from '../context/QtyContext';

const PreviewMenu = ({previewMenu, setPreviewMenu}) => {
    const [previewItems, setPreviewItems] = useState(previewMenu)
    const {qty, setQty} = useContext(QtyContext)

    useEffect(() => {
      setPreviewItems(previewMenu)
      setQty(previewMenu.length)
    }, [previewMenu])

    const deleteItem = async (id) => {
      const res = await itemApi.deletePreviewItems(id);
      if(res) {
        const updatedPreviewItems = previewItems.filter(item => item.id !== id);
        setPreviewMenu(updatedPreviewItems);
        setQty(previewMenu.length)
      }
    }

    return (
        <div className="col-8">
          <h2>Menu preview</h2>
          {previewMenu ? ( <ul className="menu-preview">
              {previewMenu.map(item => (
                  <li key={item.id} className="item">
                    <h2>{item.name}</h2>
                    <p>
                      {item.dietaries.map(dietary => (
                        <span key={dietary} className="dietary">{dietary}</span>
                      ))}         
                    </p>
                    <button data-testid={`remove-${item.id}`} className="remove-item" onClick={() => deleteItem(item.id)}>x</button>
                </li>
              ))}
          </ul>): ''}
        </div>
    );
};

export default PreviewMenu;