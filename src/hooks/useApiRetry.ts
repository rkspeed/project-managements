import axios, {type AxiosRequestConfig } from 'axios';

export default async function useApiRetry<T>(
  config: AxiosRequestConfig,
  retries = 3,
  delay = 500
): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios(config);
      return response.data;
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
    }
  }
  throw new Error('Max retries reached');
}
