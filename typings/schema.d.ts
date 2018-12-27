import {Query as QueryRoot, Mutation as MutationRoot} from './otherFile'

declare global {
  /** @graphql ID */
  type ID = string
}

/** @graphql schema */
export interface Schema {
  query: QueryRoot,
  mutation: MutationRoot
}
