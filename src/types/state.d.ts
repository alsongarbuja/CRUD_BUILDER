export type Project = {
    id?: string;
    title: string;
    description: string;
    baseUrl: string;
    isSelected: boolean;
    createEndPoint: string;
    readEndPoint: string;
    updateEndPoint: string;
    deleteEndPoint: string;
    model: object;
}