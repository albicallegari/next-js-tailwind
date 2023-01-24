export const getApiData = async () => {
  // fetch data from external API endpoint
  const res = await fetch("...");
  return res.json();
};
