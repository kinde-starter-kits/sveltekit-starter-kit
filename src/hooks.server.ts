import { sessionHooks, type Handler } from '@kinde-oss/kinde-svele-kit-sdk';

export const handle: Handler = async ({ event, resolve }) => {
	sessionHooks({ event });
	const response = await resolve(event);
	return response;
};
