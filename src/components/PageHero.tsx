import { type ReactNode } from 'react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';

/** Kept for existing imports: renders the same hero (with breadcrumb) as SubPageHero. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  images,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  images?: string[];
}) {
  const { path } = useRouter();
  return (
    <SubPageHero
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      images={images}
      crumbs={[
        { label: 'Home', path: '/' },
        { label: eyebrow, path },
      ]}
    >
      {children}
    </SubPageHero>
  );
}
