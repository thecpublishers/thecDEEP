import type { TeamMember } from '../content/team';
import { SafeImage } from './SafeImage';

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="team-card">
      <div className="team-card__image">
        <SafeImage src={member.image} alt={member.imageAlt} fallbackLabel="Team portrait placeholder" />
        {member.imagePlaceholder ? <span>Portrait placeholder</span> : null}
      </div>
      <div className="team-card__body">
        <p className="team-card__role">{member.role}</p>
        <h3>{member.name}</h3>
        <p>{member.summary}</p>
      </div>
    </article>
  );
}
