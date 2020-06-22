export interface IPost {
  id: number;
  author_id: number;
  title: string;
  content: string;
  summary: string;
  image: string;
  public: boolean;
  event_id: number;
  created_at: Date;
  updated_at: Date;
}
