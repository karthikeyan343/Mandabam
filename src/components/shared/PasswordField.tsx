'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { FormField } from './FormField';
import { SvgIcon } from './SvgIcon';
import type { PasswordFieldProps } from '@/types';

/**
 * Reusable PasswordField with built-in visibility toggle and optional "Forgot Password" link.
 */
export const PasswordField: React.FC<PasswordFieldProps> = ({
  label = 'Password',
  name = 'password',
  value,
  onChange,
  placeholder = 'Enter your password',
  showForgotPassword = false,
  forgotPasswordHref = '/forgot-password',
  onForgotPasswordClick,
  error = false,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  autoComplete = 'current-password',
  className,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const renderCustomLabel = () => {
    if (!label) return undefined;

    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '14px',
            color: '#334155',
          }}
        >
          {label}
          {required && (
            <Typography component="span" sx={{ color: '#EF4444', ml: 0.5 }}>
              *
            </Typography>
          )}
        </Typography>

        {showForgotPassword && (
          <Box>
            {onForgotPasswordClick ? (
              <Typography
                component="button"
                type="button"
                onClick={onForgotPasswordClick}
                sx={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#1359FA',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  p: 0,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Forgot Password?
              </Typography>
            ) : (
              <Link
                href={forgotPasswordHref}
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#1359FA',
                  textDecoration: 'none',
                }}
              >
                Forgot Password?
              </Link>
            )}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box className={className} sx={{ width: fullWidth ? '100%' : 'auto' }}>
      {showForgotPassword ? (
        <Box sx={{ mb: '8px' }}>{renderCustomLabel()}</Box>
      ) : null}

      <FormField
        label={showForgotPassword ? undefined : label}
        name={name}
        value={value}
        onChange={onChange}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        required={required}
        disabled={disabled}
        fullWidth={fullWidth}
        autoComplete={autoComplete}
        startAdornment={<SvgIcon name="lock" size={18} color="#94A3B8" />}
        endAdornment={
          <IconButton
            onClick={handleTogglePassword}
            edge="end"
            size="small"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            sx={{
              color: '#94A3B8',
              p: '4px',
              '&:hover': { color: '#475569' },
            }}
          >
            <SvgIcon name={showPassword ? 'eye' : 'eye-off'} size={18} />
          </IconButton>
        }
      />
    </Box>
  );
};

export default PasswordField;
