describe('Reqres API Testing', () => {
  
  const baseUrl = 'https://reqres.in/api';

  it('GET - List Users', () => {
    cy.request('GET', `${baseUrl}/users?page=2`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.be.an('array');
      expect(res.body.data.length).to.be.greaterThan(0);
    });
  });


});
