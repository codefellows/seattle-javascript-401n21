'use strict';

const { server } = require('../src/server.js');
const { db } = require('../src/models/index.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
// const bcrypt = require('bcrypt');

describe('web server authentication', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
  });

  it('signs up users', async () => {
    const response = await mockRequest
      .post('/signup')
      .send({ username: 'test user', password: 'test password' });
    expect(response.status).toBe(200);
    expect(response.body.username).toEqual('test user');

    expect(response.body.password.startsWith('$2b$10$')).toBe(true);
    expect(response.body.password.length).toBeGreaterThan(40);
    expect(response.body.password).not.toEqual('test password');
    // Run it once, get the error, and then
    // expect(response.body.password).toEqual(
    //   '$2b$10$IpbYE3WRzNPJn.t79nQ4E.9nYeOifrj0Od0vWZU2vxAsXsGEzz2xm'
    // );
    // expect(response.body.password).toEqual(
    //   await bcrypt.hash('test password', 10)
    // );
  });

  it('signs in users', async () => {
    await mockRequest
      .post('/signup')
      .send({ username: 'test user', password: 'test password' });
    const response = await mockRequest
      .post('/signin')
      .send({ username: 'test user', password: 'test password' });

    expect(response.status).toBe(200);
    expect(response.body.username).toEqual('test user');
    expect(response.body.password.startsWith('$2b$10$')).toBe(true);
  });

  it('enforces unique users', async () => {
    const res1 = await mockRequest
      .post('/signup')
      .send({ username: 'test user', password: 'test password' });
    expect(res1.status).toBe(200);

    const response = await mockRequest
      .post('/signup')
      .send({ username: 'test user', password: 'test password' });

    console.log(response.body);
    expect(response.status).toBe(500);
  });
});
