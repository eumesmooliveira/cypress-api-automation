describe("Buscar Dispositivo", () => {
  
  it("Buscar dispositivo existente", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/1",
    }).then((retorno) => {
      expect(retorno.status).to.equal(200);
      expect(retorno.body.id).to.equal("1");
      expect(retorno.body.name).to.equal("Google Pixel 6 Pro");
    });
  });

  it("Buscar dispositivo inexistente", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/xpto",
      failOnStatusCode: false
    }).then((retorno) => {
      expect(retorno.status).to.equal(404);
      expect(retorno.body.error).to.equal("Object with id=xpto was not found.");
    });
  });

});