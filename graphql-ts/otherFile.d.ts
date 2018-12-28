/*
  You may divide your interfaces declarations in multiple files!
*/
declare global {

  interface Review {
    id: ID,
    author: string,
    comment: ReviewComment
  }

  interface ReviewComment {
    timestamp: string,
    text: string
  }

  /** @graphql input */
  interface ReviewInput {
    author: string,
    comment: string
  }

}

export interface Query {
  review(args: {id: ID}): ReviewComment,
  listReviews: Review[]
}

export interface Mutation {
  addReview(args: {review: ReviewInput}): ID
}
