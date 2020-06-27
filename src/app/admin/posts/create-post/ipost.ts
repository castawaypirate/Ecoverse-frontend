import { Ievent } from '../../events/create-event/ievent';

export interface IPost {
  id: number;
  author_id: number;
  title: string;
  content: string;
  summary: string;
  image: string;
  public: boolean;
  event_id: number;
  event: Ievent;
  likes_count?: number;
  likes_users_ids?: string[];
  comments: any[];
  created_at: Date;
  updated_at: Date;
}
