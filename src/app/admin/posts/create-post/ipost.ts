export interface IPost {
  id: number;
  author_id: number;
  title: string,
  content: string;
  summary: string;
  image: string;
  public: boolean;
  created_at: Date;
  updated_at: Date;
}
