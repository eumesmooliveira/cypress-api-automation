describe("Cadastrar Dispositivo", () => {
  it("Cadastrar dispositivo existente", () => {
    cy.request({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      failOnStatusCode: false,
      body: {
        "name": "Celular Qazando Pró",
        "data": {
          "year": 2026,
          "price": 1500,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
        }
      }
    }).then((retorno) => {
      // validar minha resposta
      expect(retorno.status).to.equal(200);
      expect(retorno.body.id).not.to.empty;
      expect(retorno.body.name).to.equal("Celular Qazando Pró");
      expect(retorno.body.createdAt).to.equal("2023-10-10T10:00:00.000Z");
    });
  });
});