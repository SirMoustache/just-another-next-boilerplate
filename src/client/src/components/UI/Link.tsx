/**
 * Absolute imports
 */
import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export const ActiveLink: FC<LinkProps> = ({ children, ...props }) => {
  const router = useRouter();

  const child = React.Children.only(children);

  if (!React.isValidElement(child)) {
    throw new Error('Invalid child element for ActiveLink component');
  }

  return (
    <Link {...props}>
      {React.cloneElement(child, { active: router.pathname === props.href })}
    </Link>
  );
};
