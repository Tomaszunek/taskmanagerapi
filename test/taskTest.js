const request = require('supertest');
const mocha = require('mocha');
const it = mocha.it;
const describe = mocha.describe;
const app = require('../server');
const assert = require('chai').assert; //reference to you app.js file

describe('GET /tasks', function () {
    it('respond with json containing a list of all tasks', function (done) {
        request(app)
            .get('/api/tasks/all')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('respond with json containing a list of all tasks', function (done) {
        request(app)
            .put('/api/tasks/edit')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});