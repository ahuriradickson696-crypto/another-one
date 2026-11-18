import { User } from 'lucide-react';

type Props = {
  name: string;
  image?: string;
  initials?: string;
  size?: number;
};

export function StaffAvatar({ name, image, initials, size = 96 }: Props) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    );
  }
  if (initials) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: '#3d1a6b',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: size * 0.36,
        }}
      >
        {initials}
      </div>
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#f3eefb',
        color: '#3d1a6b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <User size={size * 0.5} />
    </div>
  );
}
