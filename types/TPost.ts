import { TComment } from './TComment';
export type TPost = {
    id: string,
    title: string,
    body: string,
    comments?: TComment[],
};
