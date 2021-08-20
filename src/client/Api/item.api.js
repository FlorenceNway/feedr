import api from './api';

const itemsApi = {
    getItems: async() => {
        const response = await api.get('/items');
        return response.data;
    },
    postPreviewItems: async(reqBody) => {
        const response = await api.post('/previewItems', reqBody);
        return response.data;
    },
    // postPreview: async(reqBody) => {
    //     const response = await api.post('/preview', reqBody);
    //     console.log('post to JS object', response.data)
    //     return response.data;
    // },
    getPreviewItems: async() => {
        const response = await api.get('/previewItems');
        return response.data;
    },
    deletePreviewItems: async(id) => {
        const response = await api.delete(`/previewItems/${id}`)
        return response.data;
    }
}

export default itemsApi;