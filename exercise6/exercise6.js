const getRequestDog = async () => {
  return await fetch('https://dog.ceo/api/breeds/image/randomm').then(
    async response => {
      const data = await response.json();
      return response.ok ? Promise.resolve(data) : Promise.reject(data);
    }
  );
};

module.exports = { getRequestDog };
