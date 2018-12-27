import random from 'random-js'
import VBase from './vbase'
import { IOContext } from '@vtex/api'

const reviewsBucket = 'reviews'

const generateId = () => random().integer(0, 99999999).toString()

export const resolvers = {
  Query: {
    listReviews: async (root, args, ctx: {vtex: IOContext}, info) => {
      const vbase = new VBase(ctx.vtex)
      return await vbase.listContents(reviewsBucket)
    },

    review: async (root, args: Review, ctx, info) => {
      const vbase = new VBase(ctx.vtex)
      return vbase.get(reviewsBucket, args.id)
    },
  },
  Mutation: {
    addReview: async (root, args: {review: ReviewInput}, ctx, info): Promise<ID> => {
      const vbase = new VBase(ctx.vtex)
      const id = generateId()
      const review = {
        id: id,
        author: args.review.author,
        comment: {
          timestamp: Date.now().toString(),
          text: args.review.comment,
        }
      }
      await vbase.save(reviewsBucket, id, review)
      return id
    },
  },
}
