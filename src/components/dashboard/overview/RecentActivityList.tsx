import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { SvgIcon } from '@/components/shared/SvgIcon';
import { RecentActivityItem } from './RecentActivityItem';
import type { RecentActivityListProps } from '@/types';

/**
 * Reusable RecentActivityList component matching the activity feed panel from Figma.
 */
export const RecentActivityList: React.FC<RecentActivityListProps> = ({
  activities,
  title = 'Recent Activity',
  viewAllHref = '/activities',
  onViewAllClick,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid rgba(241, 245, 249, 0.8)',
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)',
        p: '20px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: '16px',
          pb: '12px',
          borderBottom: '1px solid #F1F5F9',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '15px',
            color: '#0F172A',
          }}
        >
          {title}
        </Typography>

        {onViewAllClick ? (
          <Typography
            component="button"
            type="button"
            onClick={onViewAllClick}
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 600,
              fontSize: '12px',
              color: '#2563EB',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              p: 0,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            View All
            <SvgIcon name="arrow-right" size={12} color="#2563EB" />
          </Typography>
        ) : (
          <Link
            href={viewAllHref}
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 600,
              fontSize: '12px',
              color: '#2563EB',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            View All
            <SvgIcon name="arrow-right" size={12} color="#2563EB" />
          </Link>
        )}
      </Box>

      {/* Activities Stack */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {activities.map((activity) => (
          <RecentActivityItem key={activity.id} activity={activity} />
        ))}
      </Box>
    </Box>
  );
};

export default RecentActivityList;
