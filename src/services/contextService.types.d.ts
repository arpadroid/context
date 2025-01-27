export type ServicesInterface = {
    router: RouterInterface;
    apiService: ApiInterface;
};

export type ApiInterface = {
    fetch: (url: string, options?: RequestInit) => Promise<Response>;
};

export type RouterInterface = {
    go: (path: string) => Promise<string>;
    getRoute: () => string;
    isPopState: () => boolean;
    off: (event: string) => void;
    on: (event: string) => void;
};
