import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { SvgIcon } from '@/components/shared/SvgIcon';
import type { UpcomingEventCardProps } from '@/types';

/**
 * Reusable UpcomingEventCard component matching the primary event module from Figma.
 */
export const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({
  event,
  onViewDetails,
  onManageBooking,
  onBookmarkToggle,
  isBookmarked = false,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid #F1F5F9',
        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 10px 35px -8px rgba(15, 23, 42, 0.06)',
        p: '20px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {/* Card Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: '20px',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '18px',
            color: '#0F172A',
          }}
        >
          Upcoming Event
        </Typography>

        <Typography
          component="button"
          type="button"
          onClick={onViewDetails}
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '13px',
            color: '#2563EB',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          View Details
          <SvgIcon name="arrow-right" size={14} color="#2563EB" />
        </Typography>
      </Box>

      {/* Event Details Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {/* Media Column */}
        <Box
          sx={{
            position: 'relative',
            minHeight: '280px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Image
            src={event.imageUrl || '/images/dashboard/upcoming_event.png'}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            style={{ objectFit: 'cover' }}
          />

          {/* Status Badge */}
          <Box
            sx={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              px: '12px',
              py: '4px',
              backgroundColor: 'rgba(236, 253, 245, 0.95)',
              border: '1px solid #6EE7B7',
              borderRadius: '9999px',
              backdropFilter: 'blur(2px)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '12px',
                color: '#047857',
              }}
            >
              {event.status}
            </Typography>
          </Box>

          {/* Bookmark Button */}
          <IconButton
            onClick={onBookmarkToggle}
            aria-label="Bookmark event"
            sx={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              width: '36px',
              height: '36px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(2px)',
              '&:hover': { backgroundColor: '#FFFFFF' },
            }}
          >
            <SvgIcon
              name="heart"
              size={18}
              color={isBookmarked ? '#EF4444' : '#64748B'}
            />
          </IconButton>
        </Box>

        {/* Details Column */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            py: '4px',
          }}
        >
          <Box>
            {/* Category Tags */}
            <Box sx={{ display: 'flex', gap: '8px', mb: '12px' }}>
              {event.tags.map((tag, idx) => (
                <Box
                  key={idx}
                  sx={{
                    px: '12px',
                    py: '2px',
                    borderRadius: '9999px',
                    backgroundColor: idx === 0 ? '#FFF1F2' : '#EFF6FF',
                    border: '1px solid',
                    borderColor: idx === 0 ? '#FFE4E6' : '#DBEAFE',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 600,
                      fontSize: '12px',
                      color: idx === 0 ? '#F43F5E' : '#2563EB',
                    }}
                  >
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Event Title */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 700,
                fontSize: { xs: '20px', md: '24px' },
                lineHeight: '32px',
                color: '#0F172A',
                mb: '10px',
              }}
            >
              {event.title}
            </Typography>

            {/* Location */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '12px' }}>
              <SvgIcon name="map-pin" size={16} color="#64748B" />
              <Typography
                sx={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#1E293B',
                }}
              >
                {event.venueName}
                <Typography component="span" sx={{ fontWeight: 400, color: '#94A3B8', ml: 1 }}>
                  {event.location}
                </Typography>
              </Typography>
            </Box>

            {/* Schedule & Guests */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                mb: '16px',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon name="calendar" size={16} color="#64748B" />
                <Typography
                  sx={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: '#1E293B',
                  }}
                >
                  {event.dateText}{' '}
                  <Typography component="span" sx={{ color: '#64748B', fontWeight: 400 }}>
                    ({event.timeText})
                  </Typography>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon name="user" size={16} color="#64748B" />
                <Typography
                  sx={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: '#1E293B',
                  }}
                >
                  {event.guestCountText}
                </Typography>
              </Box>
            </Box>

            {/* Financial Status Box */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                p: '14px',
                backgroundColor: 'rgba(248, 250, 252, 0.8)',
                border: '1px solid #F1F5F9',
                borderRadius: '12px',
                mb: '20px',
              }}
            >
              <Box sx={{ pr: 2 }}>
                <Typography sx={{ fontSize: '12px', color: '#64748B', mb: '2px' }}>
                  Advance Paid
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#0F172A',
                  }}
                >
                  {event.advancePaid}
                </Typography>
              </Box>

              <Box sx={{ pl: 2, borderLeft: '1px solid #E2E8F0' }}>
                <Typography sx={{ fontSize: '12px', color: '#64748B', mb: '2px' }}>
                  Remaining Balance
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#0F172A',
                  }}
                >
                  {event.remainingBalance}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Action Buttons Row */}
          <Box sx={{ display: 'flex', gap: '12px' }}>
            <Button
              variant="contained"
              onClick={onViewDetails}
              sx={{
                flex: 1,
                height: '44px',
                backgroundColor: '#2563EB',
                borderRadius: '12px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '14px',
                textTransform: 'none',
                boxShadow: '0px 1px 2px 0px rgba(59, 130, 246, 0.2)',
                '&:hover': { backgroundColor: '#1D4ED8' },
              }}
            >
              View Event Details
            </Button>

            <Button
              variant="outlined"
              onClick={onManageBooking}
              sx={{
                flex: 1,
                height: '44px',
                borderColor: '#3B82F6',
                color: '#2563EB',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '14px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#EFF6FF',
                  borderColor: '#2563EB',
                },
              }}
            >
              Manage Booking
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UpcomingEventCard;
