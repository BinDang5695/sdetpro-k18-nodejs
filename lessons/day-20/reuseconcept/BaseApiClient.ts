export class BaseApiClient{

    protected baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl;
    }

    protected async get(endpoint: string){
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        if (!response.ok){
            throw new Error(`GET ${endpoint} failed: ${response.status}`);
        }
        return await response.json();
    }

    protected async post(endpoint: string, body: any){
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        if (!response.ok){
            throw new Error(`POST ${endpoint} failed: ${response.status}`);
        }
        return await response.json();
    }
}