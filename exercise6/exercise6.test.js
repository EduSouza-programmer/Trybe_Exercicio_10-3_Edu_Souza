const obj = require('./exercise6');

describe('Requisições api dog pictures', () => {
  obj.getRequestDog = jest.fn();
  afterEach(obj.getRequestDog.mockReset);
  describe('Testando a requisição sucesso', () => {
    it('Deve interpretar que a requisição se resolveu', () => {
      obj.getRequestDog.mockResolvedValue('Sucesso');

      obj.getRequestDog();
      expect(obj.getRequestDog).toHaveBeenCalled();
      expect(obj.getRequestDog).toHaveBeenCalledTimes(1);
      expect(obj.getRequestDog()).resolves.toBe('Sucesso');
      expect(obj.getRequestDog).toHaveBeenCalledTimes(2);
    });
  });
  describe('Testando a requisição em falha', () => {
    it('Deve interpretar que a requisição falhou', () => {
      obj.getRequestDog.mockRejectedValue('Falha na requisição');

      // expect(obj.getRequestDog).toHaveBeenCalled();
      expect(obj.getRequestDog).toHaveBeenCalledTimes(0);
      expect(obj.getRequestDog()).rejects.toBe('Falha na requisição');
      expect(obj.getRequestDog).toHaveBeenCalledTimes(1);
    });
  });
});
