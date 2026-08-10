/* Casa Bueno — Worker entry.
 *
 * Static files in dist/ are served by the assets binding before this runs, so
 * this only ever sees requests that do not match a file: the two API routes.
 * Anything else falls through to the assets 404 (dist/404.html). */

import { handleLead } from './lead.js';
import { handleReview } from './review.js';

const ROUTES = {
  '/api/lead': handleLead,
  '/api/review': handleReview,
};

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const handler = ROUTES[pathname];
    if (!handler) return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
    return handler(request, env);
  },
};
