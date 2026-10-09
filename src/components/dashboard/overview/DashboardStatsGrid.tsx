import * as React from 'react';
import Box from '@mui/material/Box';
import { DashboardStatCard } from './DashboardStatCard';
import type { DashboardStatsGridProps } from '@/types';

/**
 * Reusable DashboardStatsGrid component rendering the 4 key metrics row.
 */
export const DashboardStatsGrid: React.FC<DashboardStatsGridProps> = ({
  stats,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: '20px',
        width: '100%',
        mb: '24px',
      }}
    >
      {stats.map((stat) => (
        <DashboardStatCard key={stat.id} stat={stat} />
      ))}
    </Box>
  );
};

export default DashboardStatsGrid;
