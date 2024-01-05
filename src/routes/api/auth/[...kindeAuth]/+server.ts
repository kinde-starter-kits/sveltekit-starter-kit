import {handleAuth} from '@kinde-oss/kinde-auth-sveltekit';
import type {RequestEvent} from '@sveltejs/kit';

export function GET(requestEvents: RequestEvent) {
	return handleAuth(requestEvents);
}
