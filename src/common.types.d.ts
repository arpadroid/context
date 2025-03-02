export type ServiceInstanceType = SettableType;

export type ServicesKeyType = 'router' | 'apiService';

export type SettableType<T = any> = T & {
    [key: string]: any;
};

declare global {
    interface Window {
        arpadroidContext: Map<ServicesKeyType, any>;
    }
}
