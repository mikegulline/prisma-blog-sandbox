import { db } from '@/db/index';
import { cache } from 'react';
import type { Comment } from '@prisma/client';

export type CommentWithAuthor = Comment & {
  user: {
    name: string | null;
    image: string | null;
  };
};
export const fetchCommentsByPostId = cache(
  (postId: string): Promise<CommentWithAuthor[]> => {
    return db.comment.findMany({
      where: {
        postId,
      },
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });
  }
);
