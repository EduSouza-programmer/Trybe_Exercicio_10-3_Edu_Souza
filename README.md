<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  <strike>Exercício 10-3: Jest - Simulando comportamentos - Concluído o/ o/ o/ :star:</strike>
</h3>

<blockquote align="center">“Quanto mais você estuda, mais aprende e se aproxima de realizar seu sonhos!”</blockquote>

<h1></h1>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/">
    <img alt="Made by Eduardo Souza" src="https://img.shields.io/badge/made%20by-Edu%20Souza-%23F8952D">
  </a>&nbsp;

 <a href="https://edusouza-programmer.github.io/">
<img alt="Github page Edu Souza " src="https://img.shields.io/badge/Github%20page-Edu_Souza-orange">
</a>&nbsp;

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-Sobre-o-Exercício">Sobre o Exercício</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#postbox-Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#unlock-Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

# :postbox: Entrega

### :clipboard: Sumário

- <p><a href="#1"> :pushpin: 1.</a> Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada;</p>

- <p><a href="#2"> :pushpin: 2.</a> Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários;</p>

- <p><a href="#3"> :pushpin: 3.</a> Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários;</p>

## :books: Exercícios

### 1°

Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.


#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const obj = require('./exercise1');

describe('Função numeros randômicos', () => {
  it('Deve retorna uma valor padrão "mocanco" a função ', () => {
    obj.getRandomIntegerInclusive = jest.fn().mockReturnValue(10);
    expect(obj.getRandomIntegerInclusive()).toBe(10);
    expect(obj.getRandomIntegerInclusive).toHaveBeenCalledTimes(1);
  });
});
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const obj = require('./exercise2');

describe('Criando uma nova implementação na função', () => {
  it('Deve retorna a divisão do primeiro pelo segundo', () => {
    obj.getRandomIntegerInclusive = jest
      .fn()
      .mockImplementationOnce((num1, num2) => num1 / num2);

    expect(obj.getRandomIntegerInclusive(4, 2)).toBe(2);
    expect(obj.getRandomIntegerInclusive).toHaveBeenCalled();
    expect(obj.getRandomIntegerInclusive).toHaveBeenCalledTimes(1);
    expect(obj.getRandomIntegerInclusive).toHaveBeenCalledWith(4, 2);
  });
});
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
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
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 5°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 6°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
