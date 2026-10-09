import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { OrDividerProps } from '@/types';

/**
 * Reusable OrDivider component matching the Figma authentication forms divider.
 */
export const OrDivider: React.FC<OrDividerProps> = ({
  label = 'OR',
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        my: '24px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          height: '1px',
          backgroundColor: '#E2E8F0',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#FFFFFF',
          px: '12px',
          zIndex: 1,
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#94A3B8',
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrDivider;
