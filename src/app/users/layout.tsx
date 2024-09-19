import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Example user page with mock data',
};

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
