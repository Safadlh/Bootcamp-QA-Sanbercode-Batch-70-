describe('Reqres API Testing', () => {
    it('GET API List User', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
          });
    });

    it('GET API Single User', () => {
        cy.request('GET', 'https://reqres.in/api/users/2')
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
          });
    });

    it('GET API Single User Not Found', () => {
        cy.request({method:'GET', url:'https://reqres.in/api/users/23', headers:{'x-api-key': 'reqres-free-v1'}, failOnStatusCode: false})
          .then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.deep.eq({});
          });
    });

    it('GET API List Resource', () => {
        cy.request({method:'GET', url:'https://reqres.in/api/unknown', headers:{'x-api-key': 'reqres-free-v1'}})
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data[0]).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value');
          });
    });

    it('GET API List Resource Not Found', () => {
        cy.request({method:'GET', url:'https://reqres.in/api/unknown/23', headers:{'x-api-key': 'reqres-free-v1'}, failOnStatusCode: false})
          .then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.deep.eq({});
          });
    });

    it('POST API Create User', () => {
        cy.request({method:'POST', url:'https://reqres.in/api/users', headers:{'x-api-key': 'reqres-free-v1'}, body:{name: 'morpheus', job: 'leader'}})
          .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq('morpheus');
            expect(response.body.job).to.eq('leader');
            expect(response.body).to.have.property('id').and.to.be.a('string');
            expect(response.body).to.have.property('createdAt');
          });
    });

  it('PUT API Update User', () => {
    cy.request({method:'PUT', url:'https://reqres.in/api/users/2', headers:{'x-api-key': 'reqres-free-v1'}, body:{name: 'morpheus', job: 'zion resident'}})
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('morpheus');
        expect(response.body.job).to.eq('zion resident');
        expect(response.body).to.have.property('updatedAt');
      });
  });

  it('PATCH API Update User Partial', () => {
    cy.request({method:'PATCH', url:'https://reqres.in/api/users/2', headers:{'x-api-key': 'reqres-free-v1'}, body:{job: 'rebel'}})
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.job).to.eq('rebel');
        expect(response.body).to.have.property('updatedAt');
      });
  });

});