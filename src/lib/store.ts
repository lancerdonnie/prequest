import { writable } from 'svelte/store';

export const params = writable([]);
export const headers = writable([]);
export const response = writable();
export const responseHeaders = writable({});
export const time = writable(0);
export const size = writable(0);
export const status = writable();
export const editor = writable();
