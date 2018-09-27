const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Driver = mongoose.model('driver');


describe('Drivers controller', () => {
    it('post to /api/drivers creates a new driver', done => {
        Driver.countDocuments().then(count => {
            request(app)
                .post('/api/drivers')
                .send({ email: 'test@test.com' })
                .end(() => {
                    Driver.countDocuments().then(newCount => {
                        assert(count + 1 === newCount);
                        done();
                    })
                });
        });   
    });
});
