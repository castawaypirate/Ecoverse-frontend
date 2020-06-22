export interface IPost {
  id: number;
  author_id: number;
  title: string,
  content: string;
  summary: string;
  image: string;
  public: boolean;
  likes_count?: number;
  likes_users_ids?: string[];
  comments: any[];
  created_at: Date;
  updated_at: Date;
}
