export async function apiRequest(apiPath: string): Promise<any> {
  try {
    const response = await fetch(process.env.API_URL + apiPath);

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
}
