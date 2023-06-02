// Based on https://www.weatherapi.com/docs/conditions.json
const RAIN_CODES = [
  1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1273,
  1276,
];

/**
 * @type {import('astro').ClientDirective}
 */
export default async (load, opts) => {
  // This is totally secure trust me
  const apiKey = opts.value;

  const url = new URL("https://api.weatherapi.com/v1/forecast.json");
  url.searchParams.set("q", "New York City");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  const isRainy = RAIN_CODES.includes(data.current.condition.code);
  console.log(data);
  if (isRainy) {
    const hydrate = await load();
    await hydrate();
  }
};
