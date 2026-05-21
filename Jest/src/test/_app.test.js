const request = require('supertest');
const app = require('../app');

describe('GET /', () =>{
  it("Should return 200 OK", async ()=>{

    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    // expect(res.body).toHaveProperty('message');
    // expect(res.body.message).toBe('Kaisan Baa Tuloog!');
    // expect(res.body).toMatchObject({ message: 'Kaisan Baa Tuloog!' });
    expect(res.body).toEqual({ message: 'Kaisan Baa Tuloog!' });
  })
})