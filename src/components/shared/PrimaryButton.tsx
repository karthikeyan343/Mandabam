import * as React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { SvgIcon } from './SvgIcon';
import type { PrimaryButtonProps } from '@/types';

/**
 * Reusable PrimaryButton component matching brand CTA style from Figma.
 * Default height 56px with subtle blue shadow and optional arrow icon.
 */
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  type = 'button',
  fullWidth = true,
  disabled = false,
  loading = false,
  variant = 'contained',
  size = 'large',
  startIcon,
  endIcon,
  className,
}) => {
  const isLarge = size === 'large';

  return (
    <Button
      type={type}
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      variant={variant}
      className={className}
      sx={{
        height: isLarge ? '56px' : size === 'medium' ? '44px' : '36px',
        borderRadius: isLarge ? '8px' : '8px',
        px: isLarge ? '24px' : '16px',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
        fontSize: isLarge ? '14px' : '13px',
        lineHeight: '20px',
        textTransform: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        ...(variant === 'contained' && {
          backgroundColor: '#1359FA',
          color: '#FFFFFF',
          boxShadow: '0px 2px 4px -2px rgba(19, 89, 250, 0.2), 0px 4px 6px -1px rgba(19, 89, 250, 0.2)',
          '&:hover': {
            backgroundColor: '#0F47C6',
            boxShadow: '0px 4px 12px 0px rgba(19, 89, 250, 0.35)',
          },
        }),
        ...(variant === 'outlined' && {
          borderColor: '#1359FA',
          color: '#1359FA',
          backgroundColor: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#EFF6FF',
            borderColor: '#0F47C6',
          },
        }),
      }}
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        <>
          {startIcon && <Box sx={{ display: 'flex', alignItems: 'center' }}>{startIcon}</Box>}
          {children}
          {endIcon !== undefined ? (
            endIcon && <Box sx={{ display: 'flex', alignItems: 'center' }}>{endIcon}</Box>
          ) : (
            <SvgIcon name="arrow-right" size={16} color="currentColor" />
          )}
        </>
      )}
    </Button>
  );
};

export default PrimaryButton;
