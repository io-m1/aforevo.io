import AlertBanner from '@/components/ui/AlertBanner';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AlertBanner />
      {children}
    </>
  );
}
