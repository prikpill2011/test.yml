 //Test case1- Valid User Login 
 describe(' Login', () => {
    const username = 'fhrbmj';
    const password = 'password';
    
    it('successfully logs in with valid credentials', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      cy.get('username').type("fhrbmj");
      cy.get('#password').type("password");
      cy.get('#login-button').click();
     // cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service');  
    cy.timeout (['time-out'], 10000)
    cy.timeout('#username',{timeout:4000});
   });
    });
