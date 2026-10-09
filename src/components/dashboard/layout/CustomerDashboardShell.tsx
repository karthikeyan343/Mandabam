import * as React from 'react';
import Box from '@mui/material/Box';
import type { CustomerDashboardShellProps } from '@/types';

/**
 * Reusable CustomerDashboardShell component providing the two-column dashboard
 * layout structure (Sidebar + Header + Scrollable Content Canvas).
 */
export const CustomerDashboardShell: React.FC<CustomerDashboardShellProps> = ({
  sidebar,
  header,
  children,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#F8FAFC',
      }}
    >
      {/* Sidebar Slot */}
      <Box sx={{ flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
        {sidebar}
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        {/* Header Slot */}
        <Box sx={{ flexShrink: 0 }}>{header}</Box>

        {/* Scrollable Dashboard Body */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3, md: '24px' },
            overflowY: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerDashboardShell;
