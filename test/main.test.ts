describe("Recebo a data atual.", () => {
  it("Espero receber a data atual", () => {
    const date = new Date();
    expect(new Date()).toStrictEqual(date);
  });
});
