import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { BrandLogo } from '@/components/shared/BrandLogo';
import type { AuthHeaderProps } from '@/types';

/**
 * Reusable AuthHeader component matching the top navigation bar from Login and Sign Up.
 */
export const AuthHeader: React.FC<AuthHeaderProps> = ({
  switchText,
  actionText,
  actionHref,
  className,
}) => {
  return (
    <Box
      component="header"
      className={className}
      sx={{
        width: '100%',
        maxWidth: '1394px',
        height: '80px',
        mx: 'auto',
        px: { xs: 2, sm: 4, md: '56px' },
        py: '16px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <BrandLogo width={140} height={32} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: '14px',
            color: '#64748B',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          {switchText}
        </Typography>

        <Link
          href={actionHref}
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: '20px',
              py: '10px',
              backgroundColor: '#EBF3FF',
              borderRadius: '12px',
              color: '#1A56DB',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              transition: 'background-color 0.2s',
              '&:hover': {
                backgroundColor: '#DBEAFE',
              },
            }}
          >
            {actionText}
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default AuthHeader;
