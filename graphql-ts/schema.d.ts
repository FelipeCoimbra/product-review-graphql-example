import { Review, ReviewComment, ReviewInput } from './otherFile'

declare global {
  /** @graphql ID */
  type ID = string
}

interface Query {
  review(args: {id: ID}): ReviewComment,
  listReviews: Review[]
}

interface Mutation {
  addReview(args: {review: ReviewInput}): ID
}
