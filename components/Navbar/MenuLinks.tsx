import Link from 'next/link';
import { FC } from 'react';

const MenuLink: FC<{ title: string }> = ({ title }) => (
  <Link href={title.toLowerCase() === 'products' ? '/' : `/${title.toLowerCase().replace(' ', '')}`}>{title}</Link>
);

export default MenuLink;
