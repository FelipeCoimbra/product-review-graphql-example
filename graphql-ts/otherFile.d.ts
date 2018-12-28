/*
  You may divide your interfaces declarations in multiple files!
*/
declare global {

}

export interface Review {
  id: ID,
  author: string,
  comment: Comment
}

interface Comment {
  timestamp: string,
  text: string
}

/** @graphql input */
export interface ReviewInput {
  author: string,
  comment: string
}

export interface Query {
  review(args: {id: ID}): Review,
  listReviews: Review[]
}

export interface Mutation {
  addReview(args: {review: ReviewInput}): ID
}
