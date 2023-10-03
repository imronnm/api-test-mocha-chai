const assert = require('chai').assert;
const app = require('../index');

//definisi assert
//cara assert menggunakan chai
describe('App', function () {
    it('app should return welcome message', function () {
        assert.equal(app(), "welcome to QA automation")
    })

//Assert tipe data
    it('app data type is string', function () {
        let response = app();
        assert.typeOf(response, 'string')
    });
})