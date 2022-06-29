import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

const Anchor = styled('a')({});

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
  Omit<NextLinkProps, 'href' | 'as' | 'passHref' | 'onClick' | 'onMouseEnter'> {
  to: NextLinkProps['href'], // renamed from href to avoid prop collision with MuiLink's href
}

const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  // eslint-disable-next-line prefer-arrow-callback
  function NextLinkComposed(props, ref) {
    const {
      to, prefetch, replace, scroll, shallow, locale, ...otherProps
    } = props;

    return (
      <NextLink
        href={to}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        passHref
      >
        <Anchor ref={ref} {...otherProps} />
      </NextLink>
    );
  },
);

/**
 * There are multiple ts-ignores here because I can't seem to make work this thing without
 * TypeScript errors. Maybe one day I'll try to fix it, but right now I've spend way too
 * much time trying to make this shit work.
 */
export type LinkProps = Omit<NextLinkComposedProps, 'to'> &
((Omit<MuiLinkProps, 'href' | 'component'> & { type?: 'link' }) | (Omit<MuiButtonProps, 'href'> & { type: 'button' })) & {
  href: NextLinkProps['href'];
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  // eslint-disable-next-line prefer-arrow-callback
  function Link({ type = 'link', ...props }, ref) {
    const {
      href, prefetch, replace, scroll, shallow, locale, role, ...otherProps
    } = props;

    const nextjsProps = {
      to: href, prefetch, replace, scroll, shallow, locale,
    };

    const isExternal = typeof href === 'string' && (href.startsWith('http') || href.startsWith('mailto:'));

    switch (type) {
      case 'button':
        if (isExternal) {
          return (
            // @ts-ignore
            <MuiButton
              href={href}
              ref={ref}
              {...otherProps}
            />
          );
        }

        return (
          <MuiButton
            component={NextLinkComposed}
            // @ts-ignore
            ref={ref}
            {...nextjsProps}
            {...otherProps}
          />
        );
      case 'link':
        if (isExternal) {
          return (
            // @ts-ignore
            <MuiLink
              href={href}
              ref={ref}
              {...otherProps}
            />
          );
        }

        return (
          <MuiLink
            component={NextLinkComposed}
            // @ts-ignore
            ref={ref}
            {...nextjsProps}
            {...otherProps}
          />
        );
      default:
        return null;
    }
  },
);

export default Link;
