<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 10-3: Jest - Simulando comportamentos - Concluído o/ o/ o/ :star:
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

- <p><a href="#4"> :pushpin: 4.</a> Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las;</p>

- <p><a href="#5"> :pushpin: 5.</a> Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar;</p>

- <p><a href="#6"> :pushpin: 6.</a> Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário;</p>

- <p><a href="#Bônus"> :pushpin: Bônus.</a> O código abaixo utiliza uma API de piadas e implementa o fetchJoke, que é um gerador de piadas ruins. As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL. Faça um teste que verifique a chamada dessa API para um resultado específico.</p>

## :books: Exercícios

### 1°

Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.


#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const getRandomIntegerInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = { getRandomIntegerInclusive };

/* ------------------- */

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
const getRandomIntegerInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = { getRandomIntegerInclusive };

/* ------------------- */

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
const getRandomIntegerInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = { getRandomIntegerInclusive };

/* ------------------- */

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

Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const stringToUpperCase = str => str.toUpperCase();
const stringFistIndex = str => str.charAt(0);
const stringConcat = (str1, str2) => str1.concat(str2);

module.exports = {
  stringToUpperCase,
  stringFistIndex,
  stringConcat,
};

/* ------------------- */

const obj = require('./exercise4');
jest.mock('./exercise4.js');

describe('Testando as três funções', () => {
  describe('Modificando a função stringToUppercase', () => {
    it('Deve deixa a string em caixa baixa', () => {
      obj.stringToUpperCase.mockImplementation(str => str.toLowerCase());
      expect(obj.stringToUpperCase('XABLAU')).toBe('xablau');
      expect(obj.stringToUpperCase).toHaveBeenCalled();
      expect(obj.stringToUpperCase).toHaveBeenCalledTimes(1);
      expect(obj.stringToUpperCase).toHaveBeenCalledWith('XABLAU');
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
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 5°

Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const stringToUpperCase = str => str.toUpperCase();
const stringFistIndex = str => str.charAt(0);
const stringConcat = (str1, str2) => str1.concat(str2);

module.exports = {
  stringToUpperCase,
  stringFistIndex,
  stringConcat,
};

/* ------------------- */

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
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 6°

Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const getRequestDog = async () => {
  return await fetch('https://dog.ceo/api/breeds/image/randomm').then(
    async response => {
      const data = await response.json();
      return response.ok ? Promise.resolve(data) : Promise.reject(data);
    }
  );
};

module.exports = { getRequestDog };

/* ------------------ */

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
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### Bônus

O código abaixo utiliza uma API de piadas e implementa o fetchJoke, que é um gerador de piadas ruins. As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL. Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch, que faz a chamada à API, utilizando os seguintes dados:

	{
		'id': '7h3oGtrOfxc',
		'joke': 'Whiteboards ... are remarkable.',
		'status': 200
	}

	<!-- --------------------- -->

	const API_URL = 'https://icanhazdadjoke.com/';

	const fetchJoke = () => {
		return fetch(API_URL, { headers: { Accept: 'application/json' }})
			.then(response => response.json())
			.then(data => data.joke);
	};

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const URL = 'https://icanhazdadjoke.com/';

const fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: '7h3oGtrOfxc',
        joke: 'Whiteboards ... are remarkable.',
        status: 200,
      }),
  })
);

const fetchJoke = () => {
  return fetch(URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => data.joke);
};

describe('Testando o request', () => {
  it('Deve testa a piada criada na requisição fake', () => {
    expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
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


## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
