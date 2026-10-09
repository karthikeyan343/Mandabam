import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { SvgIcon } from '@/components/shared/SvgIcon';
import type { SpecialOfferBannerProps } from '@/types';

/**
 * Reusable SpecialOfferBanner component matching the promotional banner from Figma.
 */
export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = ({
  tag = 'SPECIAL OFFER',
  title = 'Premium Wedding Packages',
  description = 'Beautiful venues, trusted vendors and complete event planning from ₹2,50,000 onwards.',
  ctaText = 'Explore Packages',
  imageUrl = '/images/dashboard/special_offer.png',
  onCtaClick,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '360px',
        height: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: '20px',
      }}
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 320px"
        style={{ objectFit: 'cover' }}
      />

      {/* Dark Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(0deg, rgba(2, 6, 23, 0.95) 0%, rgba(30, 27, 75, 0.8) 50%, rgba(30, 27, 75, 0.2) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '10px',
            lineHeight: '15px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#A5B4FC',
            mb: '6px',
          }}
        >
          {tag}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#FFFFFF',
            mb: '8px',
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18px',
            color: '#E2E8F0',
            mb: '16px',
          }}
        >
          {description}
        </Typography>

        <Button
          variant="contained"
          onClick={onCtaClick}
          sx={{
            backgroundColor: '#FFFFFF',
            color: '#0F172A',
            borderRadius: '8px',
            py: '8px',
            px: '14px',
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '12px',
            textTransform: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            '&:hover': {
              backgroundColor: '#F1F5F9',
            },
          }}
        >
          {ctaText}
          <SvgIcon name="arrow-right" size={14} color="#0F172A" />
        </Button>
      </Box>
    </Box>
  );
};

export default SpecialOfferBanner;
