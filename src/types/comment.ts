import { Database } from '../types/supabase';

export type InsertPostComment =
  Database['public']['Tables']['post_comments']['Insert'];
export type UpdatePostComment =
  Database['public']['Tables']['post_comments']['Update'];

export type CommentType = {
  comment: string;
  created_at: string;
  id: string;
  post_id: string;
  user_id: string;
  users: {
    inventory: {
      id: string;
      items: {
        name: string;
        img_url: string;
        category: number;
      };
    }[];
    nickname: string;
    profile_img_url: string;
  };
};

export type AniCommentType = {
  ani_id: string;
  comment: string;
  created_at: string;
  deleted_at: string;
  id: string;
  user_id: string;
  users: {
    inventory: {
      id: string;
      items: {
        name: string;
        img_url: string;
        category: number;
      };
    }[];
    nickname: string;
    profile_img_url: string;
  };
};
