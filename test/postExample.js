const request = require ('supertest')
describe('Post request Example', () => {
    it('Succes create user', async () => {
        const response = request('https://petstore.swagger.io/v2')
            .post('/user')
            .send({
                "id": 12345,
                "username": "iyaron",
                "firstName": "imron",
                "lastName": "maulana",
                "email": "maulana@gmail.com",
                "password": "imron123",
                "phone": "08123123",
                "userStatus": 1
            })
        console.log((await response).status)
        console.log((await response).body)
    });

})
