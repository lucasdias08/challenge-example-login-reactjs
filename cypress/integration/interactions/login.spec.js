describe('Verify login/logoff UI', () => {
    it('Login funcionally?', () => {
        cy.visit('/');
        cy.get("#formBasicEmail").type("test@test.com");
        cy.get("#formBasicPassword").type("123456");
        cy.get("#root > div > form > button").click();
    });

    it('Logoff funcionally?', () => {
        setInterval(() => {
            cy.get("#root > div > div > p > button").click();
            cy.get("body > div.fade.modal.show > div > div > div > div.modal-body > button").click();
        }, 2000);
    })
})