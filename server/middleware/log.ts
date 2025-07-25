import { consola } from 'consola';

export default defineEventHandler((event) => {
  consola.info('API Request: ', getRequestURL(event).pathname);
});
