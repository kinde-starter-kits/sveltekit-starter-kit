import {handleAuth} from '@kinde-oss/kinde-sveltekit-sdk';
import type {RequestEvent} from '@sveltejs/kit';

export function GET(requestEvents: RequestEvent) {
	return handleAuth(requestEvents);
}
