import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Google as GoogleIcon, Apple as AppleIcon } from '@mui/icons-material';
import type { SocialAuthButtonsProps } from '@/types';

/**
 * Reusable SocialAuthButtons component matching Figma Google and Apple login actions.
 */
export const SocialAuthButtons: React.FC<SocialAuthButtonsProps> = ({
  onGoogleClick,
  onAppleClick,
  googleLabel = 'Continue with Google',
  appleLabel = 'Continue with Apple',
  loading = false,
  disabled = false,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: '12px',
      }}
    >
      <Button
        type="button"
        onClick={onGoogleClick}
        disabled={disabled || loading}
        fullWidth
        sx={{
          height: '56px',
          borderRadius: '8px',
          border: '1px solid #E2E8F0',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
          px: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#F8FAFC',
            borderColor: '#CBD5E1',
          },
        }}
      >
        <GoogleIcon sx={{ fontSize: 20, color: '#4285F4' }} />
        <Typography
          component="span"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '14px',
            color: '#334155',
          }}
        >
          {googleLabel}
        </Typography>
      </Button>

      <Button
        type="button"
        onClick={onAppleClick}
        disabled={disabled || loading}
        fullWidth
        sx={{
          height: '56px',
          borderRadius: '8px',
          border: '1px solid #E2E8F0',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
          px: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#F8FAFC',
            borderColor: '#CBD5E1',
          },
        }}
      >
        <AppleIcon sx={{ fontSize: 20, color: '#000000' }} />
        <Typography
          component="span"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '14px',
            color: '#334155',
          }}
        >
          {appleLabel}
        </Typography>
      </Button>
    </Box>
  );
};

export default SocialAuthButtons;
