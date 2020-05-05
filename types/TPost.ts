import { TComment } from './TComment'
export type TPost = {
    id: String,
    title: String,
    body: String,
    comments?: Array<TComment>
}