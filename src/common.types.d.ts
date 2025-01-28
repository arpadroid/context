export type ServiceInstanceType = CallableType;

export type ServicesKeyType = 'router' | 'apiService';

export type CallableType<T = any> = T & {
    [key: string]: any;
};

export type SettableType<T = any> = T & {
    [key: string]: any;
};

declare global {
    interface Window {
        arpadroidContext: Map<ServicesKeyType, any>;
    }
}
