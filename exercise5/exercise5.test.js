const obj = require('./exercise5');

describe('Repita a implementação para primeira função', () => {
  describe('Modificando a função stringToUppercase e depois resetando', () => {
    it('Deve deixa a string em caixa baixa e depois resetar', () => {
      obj.stringToUpperCase = jest
        .spyOn(obj, 'stringToUpperCase')
        .mockImplementation(str => str.toLowerCase());
      expect(obj.stringToUpperCase('XABLAU')).toBe('xablau');
      expect(obj.stringToUpperCase).toHaveBeenCalled();
      expect(obj.stringToUpperCase).toHaveBeenCalledTimes(1);
      expect(obj.stringToUpperCase).toHaveBeenCalledWith('XABLAU');

      obj.stringToUpperCase.mockRestore();
      expect(obj.stringToUpperCase('xablau')).toBe('XABLAU');
    });
  });
});
