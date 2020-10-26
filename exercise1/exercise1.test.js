const obj = require('./exercise1');

describe('Função numeros randômicos', () => {
  it('Deve retorna uma valor padrão "mocanco" a função ', () => {
    obj.getRandomIntegerInclusive = jest.fn().mockReturnValue(10);
    expect(obj.getRandomIntegerInclusive()).toBe(10);
    expect(obj.getRandomIntegerInclusive).toHaveBeenCalledTimes(1);
  });
});
