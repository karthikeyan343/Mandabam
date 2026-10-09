import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@/components/shared/SvgIcon';
import type { DashboardStatCardProps, StatTheme } from '@/types';

const THEME_STYLES: Record<StatTheme, { bg: string; iconBg: string; iconColor: string }> = {
  blue: {
    bg: '#F1F8FE',
    iconBg: '#E2F2FE',
    iconColor: '#2563EB',
  },
  green: {
    bg: '#EFF9F4',
    iconBg: '#E1F8EA',
    iconColor: '#059669',
  },
  orange: {
    bg: '#FDF4ED',
    iconBg: '#FDE9DF',
    iconColor: '#D97706',
  },
  purple: {
    bg: '#F5F3FE',
    iconBg: '#F5E0FB',
    iconColor: '#9333EA',
  },
};

/**
 * Reusable DashboardStatCard component matching the 4 key metrics cards from Figma.
 */
export const DashboardStatCard: React.FC<DashboardStatCardProps> = ({
  stat,
  className,
}) => {
  const theme = THEME_STYLES[stat.colorTheme] || THEME_STYLES.blue;

  return (
    <Box
      className={className}
      sx={{
        backgroundColor: theme.bg,
        border: '1px solid rgba(226, 232, 240, 0.8)',
        borderRadius: '16px',
        p: '16px',
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '105px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Icon Pill */}
        <Box
          sx={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: theme.iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <SvgIcon name={stat.iconName} size={22} color={theme.iconColor} />
        </Box>

        {/* Text Details */}
        <Box>
          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 600,
              fontSize: '11px',
              lineHeight: '16px',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              color: '#94A3B8',
            }}
          >
            {stat.label}
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '32px',
              color: '#0F172A',
            }}
          >
            {stat.value}
          </Typography>

          {stat.changeText && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {stat.colorTheme === 'green' && (
                <Box
                  sx={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '9999px',
                    backgroundColor: '#10B981',
                  }}
                />
              )}
              <Typography
                sx={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color:
                    stat.changeType === 'positive'
                      ? '#059669'
                      : stat.changeType === 'info'
                      ? '#2563EB'
                      : '#64748B',
                }}
              >
                {stat.changeText}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardStatCard;
