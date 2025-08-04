const request = require('supertest');
const expect = require('chai').expect;

describe('OrangeHRM Login API', () => {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com';

  it('should login successfully with valid credentials', async () => {
    const res = await request(baseUrl)
      .post('/web/index.php/api/v2/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        username: 'Admin',
        password: 'admin123'
      });

    console.log(res.status, res.body); // Debug output

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });

  it('should fail login with invalid credentials', async () => {
    const res = await request(baseUrl)
      .post('/web/index.php/api/v2/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        username: 'wrong',
        password: 'wrong'
      });

    console.log(res.status, res.body); // Debug output

    expect(res.status).to.equal(401);
    expect(res.body).to.have.property('message');
    expect(res.body.message).to.equal('Invalid credentials');
  });
});
