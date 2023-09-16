export async function apiRequest(
  url: string,
  options?: Record<string, unknown>
) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
