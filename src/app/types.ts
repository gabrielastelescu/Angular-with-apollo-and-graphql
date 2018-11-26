
export type Repository = {
    id: number;
    name: string;
    url: string;
    owner: {
      url: string;
    };
    
}
export type Query = {
    allRepositories: Repository[];
}