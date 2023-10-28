// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
			locale: Locales
			LL: TranslationFunctions
		}
		// interface PageData {}
		// interface Platform {}
		interface Platform {
		       env: {
			DB: D1Database;
			APPLICATION_FORMS_DB: D1Database;
		       };
		       context: {
				waitUntil(promise: Promise<any>): void;
		       };
		       caches: CacheStorage & { default: Cache }
		}
	}
}

export {};