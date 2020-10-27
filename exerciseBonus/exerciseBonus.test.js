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
