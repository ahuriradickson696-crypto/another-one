import type { StaffMember } from '@/data/university';

// Drop a photo into src/assets/staff/ named after the person (see the README there) and it is used automatically.
const photos = import.meta.glob('/src/assets/staff/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const slug = (name: string) =>
  name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const bySlug = new Map<string, string>();
for (const [path, url] of Object.entries(photos)) {
  const file = path.split('/').pop() ?? '';
  bySlug.set(file.replace(/\.[^.]+$/, ''), url);
}

export function StaffAvatar({ member, small = false }: { member: Pick<StaffMember, 'name' | 'initials'>; small?: boolean }) {
  const url = bySlug.get(slug(member.name));
  return (
    <span className={`staff-avatar${small ? ' small' : ''}${url ? ' has-photo' : ''}`}>
      {url ? <img src={url} alt={member.name} loading="lazy" /> : member.initials}
    </span>
  );
}
