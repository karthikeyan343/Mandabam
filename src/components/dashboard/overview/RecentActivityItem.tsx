import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@/components/shared/SvgIcon';
import type { ActivityType, RecentActivityItemProps } from '@/types';

const ACTIVITY_CONFIG: Record<
  ActivityType,
  { icon: string; bg: string; color: string }
> = {
  booking: {
    icon: 'check',
    bg: '#ECFDF5',
    color: '#059669',
  },
  payment: {
    icon: 'shield',
    bg: '#EFF6FF',
    color: '#2563EB',
  },
  vendor: {
    icon: 'user',
    bg: 'rgba(219, 234, 254, 0.7)',
    color: '#1D4ED8',
  },
  message: {
    icon: 'mail',
    bg: 'rgba(255, 228, 230, 0.7)',
    color: '#E11D48',
  },
  reminder: {
    icon: 'clock',
    bg: 'rgba(254, 243, 199, 0.7)',
    color: '#D97706',
  },
};

/**
 * Reusable RecentActivityItem component matching timeline items from Figma.
 */
export const RecentActivityItem: React.FC<RecentActivityItemProps> = ({
  activity,
  className,
}) => {
  const config = ACTIVITY_CONFIG[activity.type] || ACTIVITY_CONFIG.booking;

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        py: '12px',
        borderBottom: '1px solid #F1F5F9',
        '&:last-child': {
          borderBottom: 'none',
          pb: 0,
        },
      }}
    >
      {/* Icon Badge */}
      <Box
        sx={{
          width: '32px',
          height: '32px',
          borderRadius: '9999px',
          backgroundColor: config.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          mt: '2px',
        }}
      >
        <SvgIcon name={config.icon} size={16} color={config.color} />
      </Box>

      {/* Item Body */}
      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '2px' }}>
          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '13px',
              lineHeight: '16px',
              color: '#1E293B',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {activity.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 400,
              fontSize: '10px',
              color: '#94A3B8',
              flexShrink: 0,
              ml: 1,
            }}
          >
            {activity.timestamp}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '15px',
            color: '#64748B',
          }}
        >
          {activity.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default RecentActivityItem;
