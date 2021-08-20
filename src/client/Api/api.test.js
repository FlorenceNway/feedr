import api from './api';

// jest.mock('constants', () => ({
//     baseURL : 'local.test.url',
// }));

test('baseURL', () => {
    expect(api.defaults.baseURL).toEqual('http://localhost:3000/api')
})