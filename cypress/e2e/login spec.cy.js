 //Test case1- Valid User Login 
// describe(' Login', () => {
 //   const username = 'fhrbmj';
   // const password = 'password';
//    
 //   it('successfully logs in with valid credentials', () => {
     // cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
     // cy.get('username').type("fhrbmj");
     // cy.get('#password').type("password");
     // cy.get('#login-button').click();
     // cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service');  
   // cy.timeout (['time-out'], 10000)
   // cy.timeout('#username',{timeout:4000});
  // });
  //  });
 

  describe('login test', () => {
    it ('should sign in succesfully', () => {
    launchApplication
    enterUsername('email');
    enterPassword('password');
    clickLoginButton('log-in');

    function launchApplication() {
        cy.visit ('https://thinking-tester-contact-list.herokuapp.com/')}
    function enterUsername() {
        cy.visit ('https://thinking-tester-contact-list.herokuapp.com/')
        cy.get('email').type('email').should('have.value', 'email');}
    function enterPassword() {
        cy.visit ('https://thinking-tester-contact-list.herokuapp.com/')
        cy.get ("#password").type("password");}
    function clickLoginButton(){
        cy.visit ('https://thinking-tester-contact-list.herokuapp.com/');
        cy.get('#log-in').click();}
    function verifyLoginSuccess() {
        cy.get ('body')
        }
})  
})      