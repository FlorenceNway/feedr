import api from './api';
import itemApi from './item.api';

jest.mock('./Api',() => ({
    get: jest.fn(),
    post: jest.fn(),
}))

test('items api return data', async () => {
    const mock_response = {
       items: [{
        id: 1000,
        name: 'name',
        dietaries: ["df","v","ve"] 
       }]
    }
    api.get.mockResolvedValue(mock_response)

    const response = await itemApi.getItems();
    console.log(response)

    expect(api.get).toHaveBeenCalledWith('/items');
    // expect(response).toEqual(mock_response)
})
test('Preview items post data', async () => {
    const response = {
        status: 200,
      };
      api.post.mockResolvedValue(response);

      const postData = {
        items: [{
         id: 1000,
         name: 'name',
         dietaries: ["df","v","ve"] 
        }]
     }

    const status = await itemApi.postPreviewItems(postData);
    expect(api.post).toHaveBeenCalledWith('/previewItems', { ...postData });
    // expect(status).toEqual(response.status);
})
