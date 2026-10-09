'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@/components/shared/SvgIcon';
import type { AuthRole, RoleOption, RoleSelectorProps } from '@/types';

const DEFAULT_ROLES: RoleOption[] = [
  { id: 'customer', label: 'Customer', iconName: 'user' },
  { id: 'venue_owner', label: 'Venue Owner', iconName: 'cellar' },
  { id: 'service_vendor', label: 'Service Vendor', iconName: 'vendor' },
  { id: 'admin', label: 'Admin', iconName: 'admin' },
];

/**
 * 4-role segmented switcher component matching the Figma role tab bar.
 */
export const RoleSelector: React.FC<RoleSelectorProps> = ({
  selectedRole,
  onRoleChange,
  disabled = false,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        height: '52px',
        p: '4px',
        backgroundColor: '#F8FAFC',
        border: '1px solid #F1F5F9',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        mb: '28px',
      }}
      role="tablist"
      aria-label="User role selection"
    >
      {DEFAULT_ROLES.map((role) => {
        const isActive = selectedRole === role.id;

        return (
          <Box
            key={role.id}
            component="button"
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={disabled}
            onClick={() => onRoleChange(role.id as AuthRole)}
            sx={{
              flex: 1,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: '4px', sm: '6px' },
              px: { xs: '6px', sm: '12px' },
              borderRadius: '12px',
              border: 'none',
              cursor: disabled ? 'not-allowed' : 'pointer',
              backgroundColor: isActive ? '#EBF3FF' : 'transparent',
              color: isActive ? '#1D5BF8' : '#64748B',
              boxShadow: isActive ? '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' : 'none',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: isActive ? '#EBF3FF' : '#F1F5F9',
                color: isActive ? '#1D5BF8' : '#334155',
              },
            }}
          >
            <SvgIcon
              name={role.iconName}
              size={16}
              color={isActive ? '#1D5BF8' : '#64748B'}
            />
            <Typography
              component="span"
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: isActive ? 700 : 600,
                fontSize: { xs: '11px', sm: '13px' },
                lineHeight: '16px',
                whiteSpace: 'nowrap',
              }}
            >
              {role.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default RoleSelector;
