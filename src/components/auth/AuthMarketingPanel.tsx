import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { SvgIcon } from '@/components/shared/SvgIcon';
import type { AuthMarketingFeature, AuthMarketingPanelProps } from '@/types';

const DEFAULT_FEATURES: AuthMarketingFeature[] = [
  {
    title: 'Verified Venues',
    description: 'Handpicked and physically audited',
    iconName: 'venue',
    badgeBg: '#E9F2FF',
  },
  {
    title: 'Trusted Vendors',
    description: 'Caterers, decors, photographers',
    iconName: 'vendor',
    badgeBg: '#F3E8FF',
  },
  {
    title: 'Event Packages',
    description: 'Customizable for every event',
    iconName: 'calendar',
    badgeBg: '#FFEDD5',
  },
  {
    title: 'Secure Payments',
    description: 'Safe and transparent transactions',
    iconName: 'shield',
    badgeBg: '#ECFDF5',
  },
];

/**
 * Reusable AuthMarketingPanel component representing the left marketing showcase
 * on Login and Sign Up screens.
 */
export const AuthMarketingPanel: React.FC<AuthMarketingPanelProps> = ({
  categoryTracker = 'PLAN · BOOK · CELEBRATE',
  headline = 'Your Perfect Event',
  headlineAccent = 'Starts Here',
  subtitle = 'Discover premium venues, trusted vendors, and customized packages for weddings, corporate events, and more - all in one place.',
  features = DEFAULT_FEATURES,
  venuesCount = '500+',
  ratingScore = '4.8',
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        maxWidth: '634px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Category Tracker */}
      <Typography
        component="div"
        sx={{
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 700,
          fontSize: '13px',
          lineHeight: '20px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#64748B',
          mb: '12px',
        }}
      >
        {categoryTracker}
      </Typography>

      {/* Main Headline */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 800,
          fontSize: { xs: '36px', sm: '44px', md: '54px' },
          lineHeight: { xs: '42px', sm: '50px', md: '54px' },
          letterSpacing: '-0.025em',
          color: '#020617',
          mb: '20px',
        }}
      >
        {headline}{' '}
        <Box component="span" sx={{ color: '#1359FA' }}>
          {headlineAccent}
        </Box>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 400,
          fontSize: { xs: '16px', md: '18px' },
          lineHeight: '28px',
          color: '#475569',
          mb: '36px',
          maxWidth: '593px',
        }}
      >
        {subtitle}
      </Typography>

      {/* 2x2 Feature Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: '24px 32px',
          mb: '48px',
        }}
      >
        {features.map((feature, idx) => (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Box
              sx={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: feature.badgeBg || '#E9F2FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <SvgIcon name={feature.iconName} size={22} color="#1359FA" />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 700,
                  fontSize: '15px',
                  lineHeight: '20px',
                  color: '#0F172A',
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#64748B',
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Layered Visual Gallery & Floating Badges */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '576px',
          height: { xs: '320px', sm: '380px' },
        }}
      >
        {/* Main Center Image */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '240px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0px 6px 12px -4px rgba(15, 23, 42, 0.06), 0px 18px 30px -8px rgba(15, 23, 42, 0.12)',
            border: '3px solid #FFFFFF',
          }}
        >
          <Image
            src="/images/auth/banquet_tent.png"
            alt="Outdoor illuminated banquet tent"
            fill
            sizes="(max-width: 768px) 100vw, 576px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>

        {/* Top-Left Floating Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: '-12px',
            left: '-16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            px: '14px',
            py: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(6px)',
            borderRadius: '16px',
            boxShadow: '0px 6px 12px -4px rgba(15, 23, 42, 0.06)',
            border: '1px solid #F1F5F9',
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              width: '32px',
              height: '32px',
              borderRadius: '9999px',
              backgroundColor: '#EFF6FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgIcon name="venue" size={16} color="#1359FA" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 800,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#0F172A',
              }}
            >
              {venuesCount}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '11px',
                color: '#64748B',
              }}
            >
              Premium Venues
            </Typography>
          </Box>
        </Box>

        {/* Overlapping Bottom-Left Image */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '10px',
            left: '-20px',
            width: { xs: '160px', sm: '210px' },
            height: { xs: '130px', sm: '160px' },
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0px 6px 12px -4px rgba(15, 23, 42, 0.08), 0px 18px 30px -8px rgba(15, 23, 42, 0.14)',
            border: '3px solid #FFFFFF',
            zIndex: 2,
          }}
        >
          <Image
            src="/images/auth/ballroom.png"
            alt="Opulent grand ballroom reception hall"
            fill
            sizes="210px"
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* Overlapping Bottom-Right Image */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '25px',
            right: { xs: '10px', sm: '30px' },
            width: { xs: '170px', sm: '220px' },
            height: { xs: '120px', sm: '150px' },
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0px 6px 12px -4px rgba(15, 23, 42, 0.08)',
            border: '3px solid #FFFFFF',
            zIndex: 1,
          }}
        >
          <Image
            src="/images/auth/sunset.png"
            alt="Romantic outdoor dinner at sunset"
            fill
            sizes="220px"
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* Floating Badge Bottom-Right */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '-10px',
            right: '-10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            px: '14px',
            py: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(6px)',
            borderRadius: '16px',
            boxShadow: '0px 6px 12px -4px rgba(15, 23, 42, 0.08)',
            border: '1px solid #F1F5F9',
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              width: '32px',
              height: '32px',
              borderRadius: '9999px',
              backgroundColor: '#FFFBEB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgIcon name="star" size={16} color="#F59E0B" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 800,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#0F172A',
              }}
            >
              {ratingScore}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '10px',
                color: '#64748B',
              }}
            >
              Customer Rating
            </Typography>
          </Box>
        </Box>

        {/* Sparkle Decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: '210px',
            right: '-30px',
            color: '#1359FA',
            zIndex: 2,
          }}
        >
          <SvgIcon name="sparkle" size={36} color="#1359FA" />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthMarketingPanel;
