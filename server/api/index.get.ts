import { useResponse } from '../utils/response';
import { consola } from 'consola';

export default eventHandler(async () => {
  // ================================
  // Composables
  // ================================
  const { successResponse, errorResponse } = useResponse();

  // ================================
  // Logic
  // ================================
  try {
    const users = await useDrizzle().select().from(tables.users).execute();
    return successResponse(users);
  } catch (error) {
    consola.error(error);
    return errorResponse('Something went wrong', 'SERVER_ERROR');
  }
});
