/**
 * @typedef {import('./contextService.types').RouterInterface} RouterInterface
 * @typedef {import('./contextService.types').ServicesInterface} ServicesInterface
 * @typedef {import('../types').ServiceInstanceType} ServiceInstanceType
 * @typedef {import('../types').ServicesKeyType} ServicesKeyType
 */

// !window && (window = {});
/** @type {Map<ServicesKeyType, any>} */
const services = window.arpadroidContext || new Map();
window.arpadroidContext = services;

// Default services logic
/** @type {ServicesInterface} */
const defaultServices = {
    apiService: {
        fetch: (url, options) => {
            console.warn(`Default API service: fetching ${url}`);
            return fetch(url, options);
        }
    },
    router: {
        go: path => {
            console.warn(`Default router: navigating to ${path}`);
            // eslint-disable-next-line xss/no-location-href-assign
            window.location.href = path;
            return Promise.resolve(path);
        },
        getRoute: () => window.location.href,
        isPopState: () => false,
        off: event => console.warn(`Default router: 'off' method called for event '${event}'`),
        on: event => console.warn(`Default router: 'on' method called for event '${event}'`)
    }
};

/**
 * Registers a service in the context.
 * @param {ServicesKeyType} key - Unique key for the service.
 * @param {ServiceInstanceType} instance - The service instance.
 */
export function setService(key, instance) {
    if (services.has(key)) {
        console.warn(`Service with key '${key}' is already registered.`);
        return;
    }
    services.set(key, instance);
}

/** @type {Record<string, any>} */
const defaultNotifiedServices = {};

/**
 * Retrieves a service from the context. If not registered, falls back to the default service.
 * @param {ServicesKeyType} key - Unique key for the service.
 * @returns {ServiceInstanceType} - The registered service instance or the default implementation.
 */
export function getService(key) {
    if (!services.has(key)) {
        if (!defaultNotifiedServices[key]) {
            console.warn(`Service with key '${key}' is not registered. Using default service.`);
            defaultNotifiedServices[key] = true;
        }
        return defaultServices[key] || null;
    }
    return services.get(key);
}

/**
 * Clears all registered services (useful for testing or resets).
 */
export function clearServices() {
    services.clear();
}
