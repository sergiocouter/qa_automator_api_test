/// <reference types="cypress"/>

describe("Buscar dispositivo", () => {

    it("Buscar dispositivo específico", () => {
        // Isso no Javascript é uma Promiss (promessa), ou seja, eu não sei se vai dá certo
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/photos/4046",

            // .then - é usado para fazer as validações que eu quiser, eu uso uma variável, dentro de uma função anônima
        }).then((response) => {

            // expect = espero que .....
            // to.equal = seja igual o valor ....
            // Nesse exemplo o response é uma variável, onde está armazenado o objeto
            // Daí eu pego o objeto e vou navegando pelo DOM do javascript, através do .ponto
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(4046);
            expect(response.body.albumId).to.equal(81);
        });
    });

    it("Buscar dipositivo Inexistente", () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/photos/5051",
            // Muda o comportamento do Status code porque o Cypress espera sempre o Statusd 200
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.id).to.equal();
        })
    });

    it("Cadastrar dipositivo", () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {
                
                "userId": 10,
                "id": 102,
                "title": "POST do Serjão",
                "body": "Automação de API"
                
            },
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body.title).to.equal("POST do Serjão");
        })
    });


});



