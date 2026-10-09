import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import type { AuthPageShellProps } from '@/types';

/**
 * Reusable AuthPageShell component providing the full-page layout,
 * background radial gradients, 12-column grid, and footer.
 */
export const AuthPageShell: React.FC<AuthPageShellProps> = ({
  header,
  marketingPanel,
  authCard,
  copyrightText = '© 2025 EthicSecur Events Inc. All rights reserved.',
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: `
          radial-gradient(circle at 0% 0%, rgba(224, 238, 255, 0.6) 0%, rgba(224, 238, 255, 0) 50%),
          radial-gradient(circle at 100% 0%, rgba(238, 242, 255, 0.4) 0%, rgba(238, 242, 255, 0) 40%),
          radial-gradient(circle at 50% 100%, rgba(240, 244, 255, 0.5) 0%, rgba(240, 244, 255, 0) 50%),
          #F7F9FC
        `,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: { xs: 2, md: '36px' },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Top Navigation Slot */}
      <Box sx={{ mb: { xs: 4, md: '48px' } }}>{header}</Box>

      {/* Main 12-Column Grid Content */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1394px',
          p: '0 !important',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, 1fr)' },
          gap: { xs: '40px', lg: '56px' },
          alignItems: 'center',
          my: 'auto',
        }}
      >
        {/* Left Column (5 Cols on LG) */}
        <Box
          sx={{
            gridColumn: { lg: 'span 5' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {marketingPanel}
        </Box>

        {/* Right Column (7 Cols on LG, centered) */}
        <Box
          sx={{
            gridColumn: { lg: 'span 7' },
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'flex-end' },
          }}
        >
          {authCard}
        </Box>
      </Container>

      {/* Page Footer */}
      <Box
        component="footer"
        sx={{
          textAlign: 'center',
          pt: { xs: 4, md: '48px' },
          pb: '8px',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#94A3B8',
          }}
        >
          {copyrightText}
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthPageShell;
