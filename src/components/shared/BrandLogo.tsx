import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import type { BrandLogoProps } from '@/types';

/**
 * Reusable BrandLogo component.
 * Displays the verified Figma logo asset: "ES EthicSecur SofTec (P) Ltd".
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  width = 160,
  height = 36,
  href = '/',
  alt = 'EthicSecur Events',
  priority = true,
  className,
}) => {
  const content = (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        width,
        height,
      }}
      className={className}
    >
      <Image
        src="/images/auth/logo.png"
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        style={{
          objectFit: 'contain',
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </Box>
  );

  if (href) {
    return (
      <Link href={href} style={{ display: 'inline-flex', textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return content;
};

export default BrandLogo;
