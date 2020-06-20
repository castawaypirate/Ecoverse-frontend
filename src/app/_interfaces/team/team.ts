import { TeamMember } from './team-member';
import { IPost } from 'src/app/create-post/ipost';

export interface Team {
    id: Number,
    name: String,
    description: String,
    public: boolean,
    members: TeamMember[],
    pending_members: TeamMember[],
    posts: IPost[],
    created_at: Date,
    updated_at: Date
}
