/// <reference types="cypress"/>

describe("Buscar dispositivo", () => {

    it("Buscar dispositivo específico", () => {
        // Isso no Javascript é uma Promiss (promessa), ou seja, eu não sei se vai dá certo
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/7",

            // .then - é usado para fazer as validações que eu quiser, eu uso uma variável, dentro de uma função anônima
        }).then((response) => {

            // expect = espero que .....
            // to.equal = seja igual o valor ....
            // Nesse exemplo o response é uma variável, onde está armazenado o objeto
            // Daí eu pego o objeto e vou navegando pelo DOM do javascript, através do .ponto
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal("7");
        });
    });

});



