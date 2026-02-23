export type ServiceInstanceType = SettableType;

export type ServicesKeyType = 'router' | 'apiService';

export type SettableType<T = unknown> = T & {
    [key: string]: unknown;
};

declare global {
    interface Window {
        arpadroidContext: Map<ServicesKeyType, SettableType>;
    }
}
