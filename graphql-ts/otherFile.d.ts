/*
  You may divide your interfaces declarations in multiple files!
*/

export interface Review {
  id: ID,
  author: string,
  comment: ReviewComment
}

export interface ReviewComment {
  timestamp: string,
  text: string
}

/** @graphql input */
export interface ReviewInput {
  author: string,
  comment: string
}
