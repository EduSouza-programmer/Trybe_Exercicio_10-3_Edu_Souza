const obj = require('./exercise2');

describe('Criando uma nova implementação na função', () => {
  it('Deve retorna a divisão do primeiro pelo segundo', () => {
    obj.getRandomIntegerInclusive = jest
      .fn()
      .mockImplementation((num1, num2) => num1 / num2);
    expect(obj.getRandomIntegerInclusive(4, 2)).toBe(2);
    expect(obj.getRandomIntegerInclusive).toHaveBeenCalled();
    expect(obj.getRandomIntegerInclusive).toHaveBeenCalledTimes(1);
    expect(obj.getRandomIntegerInclusive).toHaveBeenCalledWith(4, 2);
  });
});
