export async function getDictionary(w) {
  const response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${w}`
  );

  return response.data[0];
}
