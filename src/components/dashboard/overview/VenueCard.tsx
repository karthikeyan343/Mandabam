import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { SvgIcon } from '@/components/shared/SvgIcon';
import type { VenueCardProps } from '@/types';

/**
 * Reusable VenueCard component matching the venue recommendation cards from Figma.
 */
export const VenueCard: React.FC<VenueCardProps> = ({
  venue,
  onBook,
  onFavoriteToggle,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #F1F5F9',
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: { xs: '100%', sm: '260px' },
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0px 8px 16px -4px rgba(15, 23, 42, 0.06)',
        },
      }}
    >
      <Box sx={{ p: '12px', pb: 0 }}>
        {/* Venue Image */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '110px',
            borderRadius: '12px',
            overflow: 'hidden',
            mb: '12px',
          }}
        >
          <Image
            src={venue.imageUrl}
            alt={venue.name}
            fill
            sizes="260px"
            style={{ objectFit: 'cover' }}
          />

          {/* Bookmark Button */}
          <IconButton
            onClick={onFavoriteToggle}
            aria-label="Add to favorites"
            sx={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '28px',
              height: '28px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(2px)',
              p: 0,
              '&:hover': { backgroundColor: '#FFFFFF' },
            }}
          >
            <SvgIcon
              name="heart"
              size={14}
              color={venue.isFavorite ? '#EF4444' : '#64748B'}
            />
          </IconButton>
        </Box>

        {/* Venue Title */}
        <Typography
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#0F172A',
            mb: '4px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {venue.name}
        </Typography>

        {/* Rating and Reviews */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '8px' }}>
          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '12px',
              color: '#F59E0B',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            ★ {venue.rating}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 400,
              fontSize: '11px',
              color: '#94A3B8',
            }}
          >
            ({venue.reviewCount} reviews)
          </Typography>
        </Box>

        {/* Capacity */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '12px' }}>
          <SvgIcon name="user" size={14} color="#64748B" />
          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 400,
              fontSize: '12px',
              color: '#64748B',
            }}
          >
            {venue.capacityText}
          </Typography>
        </Box>
      </Box>

      {/* Pricing and Action Footer */}
      <Box
        sx={{
          borderTop: '1px solid #F1F5F9',
          px: '12px',
          py: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '14px',
            color: '#0F172A',
          }}
        >
          {venue.priceText}
        </Typography>

        <Button
          variant="contained"
          size="small"
          onClick={onBook}
          sx={{
            backgroundColor: '#EFF6FF',
            color: '#2563EB',
            borderRadius: '8px',
            px: '14px',
            py: '4px',
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '12px',
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#DBEAFE',
              boxShadow: 'none',
            },
          }}
        >
          Book
        </Button>
      </Box>
    </Box>
  );
};

export default VenueCard;
