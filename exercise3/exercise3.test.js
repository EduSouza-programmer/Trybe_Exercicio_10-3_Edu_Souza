const obj = require('./exercise3');

describe('Testes na função getRandomIntegerInclusive', () => {
  describe('Crie uma nova implementação que receba três parâmetros e retorne sua multiplicação', () => {
    it('Deve retorna a multiplicação dos parâmetros', () => {
      obj.getRandomIntegerInclusive = jest
        .fn()
        .mockImplementation((num1, num2, num3) => num1 * num2 * num3);
      expect(obj.getRandomIntegerInclusive(2, 2, 2)).toBe(8);
      expect(obj.getRandomIntegerInclusive).toHaveBeenCalled();
      expect(obj.getRandomIntegerInclusive).toHaveBeenCalledTimes(1);
      expect(obj.getRandomIntegerInclusive).toHaveBeenCalledWith(2, 2, 2);
    });
  });
  describe('Resete sua implementação e crie uma nova', () => {
    it('Deve resetar o mock e criar uma nova implementação que retorne o dobro', () => {
      obj.getRandomIntegerInclusive.mockReset();
      expect(obj.getRandomIntegerInclusive).toHaveBeenCalledTimes(0);

      obj.getRandomIntegerInclusive.mockImplementation(num => num * 2);

      expect(obj.getRandomIntegerInclusive(2)).toBe(4);
      expect(obj.getRandomIntegerInclusive).toHaveBeenCalled();
      expect(obj.getRandomIntegerInclusive).toHaveBeenCalledTimes(1);
      expect(obj.getRandomIntegerInclusive).toHaveBeenCalledWith(2);
    });
  });
});
