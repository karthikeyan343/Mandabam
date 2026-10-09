import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { AuthCardProps } from '@/types';

/**
 * Reusable AuthCard component providing the white floating card container
 * for Login and Sign Up screens.
 */
export const AuthCard: React.FC<AuthCardProps> = ({
  title,
  subtitle,
  children,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        maxWidth: '722px',
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid rgba(241, 245, 249, 0.9)',
        boxShadow: '0px 8px 16px -6px rgba(15, 23, 42, 0.03), 0px 20px 45px -10px rgba(15, 23, 42, 0.05)',
        p: { xs: '24px', sm: '36px', md: '48px' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ mb: '28px', textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 800,
            fontSize: { xs: '28px', sm: '36px', md: '40px' },
            lineHeight: { xs: '36px', md: '44px' },
            letterSpacing: '-0.02em',
            color: '#0F172A',
            mb: '8px',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: { xs: '14px', sm: '16px' },
            lineHeight: '22px',
            color: '#64748B',
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {children}
    </Box>
  );
};

export default AuthCard;
