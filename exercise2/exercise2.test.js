const obj = require('./exercise2');

test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
  obj.getRandomIntegerInclusive = jest
    .fn()
    .mockImplementationOnce((num1, num2) => num1 / num2);

  expect(obj.getRandomIntegerInclusive(4, 2)).toBe(2);
  expect(obj.getRandomIntegerInclusive).toHaveBeenCalled();
  expect(obj.getRandomIntegerInclusive).toHaveBeenCalledTimes(1);
  expect(obj.getRandomIntegerInclusive).toHaveBeenCalledWith(4, 2);
});
