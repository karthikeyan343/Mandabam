import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import type { FormFieldProps } from '@/types';

/**
 * Reusable FormField component matching the exact input styling from Figma.
 * Supports start/end adornments, labels, error states, and helper text.
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  startAdornment,
  endAdornment,
  error = false,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  autoComplete,
  className,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: fullWidth ? '100%' : 'auto',
      }}
      className={className}
    >
      {label && (
        <Typography
          component="label"
          htmlFor={name}
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '16px',
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
      )}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '56px',
          px: '16px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid',
          borderColor: error ? '#EF4444' : '#E2E8F0',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          '&:focus-within': {
            borderColor: error ? '#EF4444' : '#1359FA',
            boxShadow: error
              ? '0px 0px 0px 3px rgba(239, 68, 68, 0.15)'
              : '0px 0px 0px 3px rgba(19, 89, 250, 0.15)',
          },
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {startAdornment && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: '12px',
              color: '#94A3B8',
              flexShrink: 0,
            }}
          >
            {startAdornment}
          </Box>
        )}

        <InputBase
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          fullWidth
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '14px',
            color: '#0F172A',
            '& input': {
              p: 0,
              '&::placeholder': {
                color: '#94A3B8',
                opacity: 1,
              },
            },
          }}
        />

        {endAdornment && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ml: '12px',
              color: '#94A3B8',
              flexShrink: 0,
            }}
          >
            {endAdornment}
          </Box>
        )}
      </Box>

      {helperText && (
        <Typography
          variant="body2"
          sx={{
            color: error ? '#EF4444' : '#64748B',
            fontSize: '12px',
            mt: '2px',
          }}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default FormField;
