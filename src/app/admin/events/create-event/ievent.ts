import DateTimeFormat = Intl.DateTimeFormat;

export interface Ievent {
  id: number;
  title: string;
  content: string;
  start: Date;
  end: Date;
  place: string;
  post_id: number;
  created_at: Date;
  updated_at: Date;

}
