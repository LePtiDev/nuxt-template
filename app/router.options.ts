import type { RouterConfig } from '@nuxt/schema';

import dashboard from './modules/dashboard/router';
import auth from './modules/auth/router';

export default {
  routes: (_routes) => [...dashboard, ...auth],
} satisfies RouterConfig;
