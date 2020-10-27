const obj = require('./exercise4');
jest.mock('./exercise4.js');

describe('Testando as três funções', () => {
  describe('Modificando a função stringToUppercase', () => {
    it('Deve deixa a string em caixa baixa', () => {
      obj.stringToUpperCaser.mockImplementation(str => str.toLowerCase());
      expect(obj.stringToUpperCaser('XABLAU')).toBe('xablau');
      expect(obj.stringToUpperCaser).toHaveBeenCalled();
      expect(obj.stringToUpperCaser).toHaveBeenCalledTimes(1);
      expect(obj.stringToUpperCaser).toHaveBeenCalledWith('XABLAU');
    });
  });
  describe('Modificando a função stringFirstIndex', () => {
    it('Deve retorna a última letra da string', () => {
      obj.stringFistIndex.mockImplementation(str => str.charAt(str.length - 1));
      expect(obj.stringFistIndex('xablau')).toBe('u');
      expect(obj.stringFistIndex).toHaveBeenCalled();
      expect(obj.stringFistIndex).toHaveBeenCalledTimes(1);
      expect(obj.stringFistIndex).toHaveBeenCalledWith('xablau');
    });
  });
  describe('Modificando a função stringConcat', () => {
    it('Deve retorna três string concatenadas', () => {
      obj.stringConcat.mockImplementation((str1, str2, str3) =>
        str1.concat(str2, str3)
      );
      expect(obj.stringConcat('xa', 'bla', 'u')).toBe('xablau');
      expect(obj.stringConcat).toHaveBeenCalled();
      expect(obj.stringConcat).toHaveBeenCalledTimes(1);
      expect(obj.stringConcat).toHaveBeenCalledWith('xa', 'bla', 'u');
    });
  });
});
