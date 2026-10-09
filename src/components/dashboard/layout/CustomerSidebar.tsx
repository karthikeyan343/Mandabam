import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { SvgIcon } from '@/components/shared/SvgIcon';
import type { CustomerSidebarProps } from '@/types';

interface NavItem {
  label: string;
  path: string;
  iconName: string;
}

const MAIN_NAV: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard', iconName: 'venue' },
  { label: 'Discover', path: '/discover', iconName: 'search' },
  { label: 'Venues', path: '/venues', iconName: 'venue' },
  { label: 'Event Services', path: '/services', iconName: 'vendor' },
  { label: 'Packages', path: '/packages', iconName: 'briefcase' },
];

const MANAGE_NAV: NavItem[] = [
  { label: 'My Events', path: '/events', iconName: 'calendar' },
  { label: 'Bookings', path: '/bookings', iconName: 'check' },
  { label: 'Payments', path: '/payments', iconName: 'shield' },
  { label: 'Invoices', path: '/invoices', iconName: 'briefcase' },
  { label: 'Favorites', path: '/favorites', iconName: 'heart' },
  { label: 'Messages', path: '/messages', iconName: 'mail' },
  { label: 'Notifications', path: '/notifications', iconName: 'bell' },
];

const SETTINGS_NAV: NavItem[] = [
  { label: 'Profile', path: '/profile', iconName: 'user' },
  { label: 'Settings', path: '/settings', iconName: 'admin' },
  { label: 'Help & Support', path: '/support', iconName: 'mail' },
];

/**
 * Reusable CustomerSidebar component matching Figma sidebar navigation and promo card.
 */
export const CustomerSidebar: React.FC<CustomerSidebarProps> = ({
  activePath = '/dashboard',
  onNavigate,
  className,
}) => {
  const renderNavGroup = (title: string | null, items: NavItem[]) => (
    <Box sx={{ mb: '16px' }}>
      {title && (
        <Typography
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '16px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#94A3B8',
            px: '14px',
            mb: '8px',
          }}
        >
          {title}
        </Typography>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {items.map((item) => {
          const isActive = activePath === item.path || (item.path !== '/' && activePath.startsWith(item.path));

          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(item.path);
                }
              }}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  px: '14px',
                  py: '10px',
                  borderRadius: '12px',
                  backgroundColor: isActive ? '#EFF6FF' : 'transparent',
                  color: isActive ? '#2563EB' : '#475569',
                  transition: 'background-color 0.2s, color 0.2s',
                  '&:hover': {
                    backgroundColor: isActive ? '#EFF6FF' : '#F8FAFC',
                    color: isActive ? '#2563EB' : '#0F172A',
                  },
                }}
              >
                <SvgIcon
                  name={item.iconName}
                  size={18}
                  color={isActive ? '#2563EB' : '#64748B'}
                />
                <Typography
                  sx={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'inherit',
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );

  return (
    <Box
      component="aside"
      className={className}
      sx={{
        width: '256px',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #E2E8F0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: '20px',
        flexShrink: 0,
      }}
    >
      <Box>
        {/* Brand Logo Header */}
        <Box sx={{ px: '8px', py: '4px', mb: '24px' }}>
          <BrandLogo width={166} height={36} href="/dashboard" />
        </Box>

        {/* Navigation Sections */}
        {renderNavGroup(null, MAIN_NAV)}
        {renderNavGroup('Manage / Events', MANAGE_NAV)}
        {renderNavGroup('Settings', SETTINGS_NAV)}
      </Box>

      {/* Support Consultation Promo Card */}
      <Box
        sx={{
          mt: '24px',
          p: '16px',
          borderRadius: '16px',
          background: 'linear-gradient(140deg, #EFF5FF 0%, #EDF3FE 45%, #F2EFFE 100%)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0px 12px 32px -4px rgba(25, 35, 70, 0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ pr: '60px', mb: '12px' }}>
          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '-0.02em',
              color: '#0C1A40',
              mb: '4px',
            }}
          >
            Need Help Planning Your Event?
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 400,
              fontSize: '10px',
              lineHeight: '14px',
              color: '#475569',
            }}
          >
            Talk to our event experts for free consultation.
          </Typography>
        </Box>

        {/* Support Consultant Representative Image */}
        <Box
          sx={{
            position: 'absolute',
            top: '8px',
            right: '-8px',
            width: '68px',
            height: '68px',
            borderRadius: '9999px',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/dashboard/consultant.png"
            alt="Event support expert"
            width={68}
            height={68}
            style={{ objectFit: 'cover' }}
          />
        </Box>

        <Link href="/support" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              px: '12px',
              py: '8px',
              backgroundColor: '#0062FF',
              borderRadius: '12px',
              color: '#FFFFFF',
              boxShadow: '0px 4px 14px 0px rgba(0, 98, 255, 0.35)',
              transition: 'background-color 0.2s',
              '&:hover': {
                backgroundColor: '#0052D6',
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '11px',
                color: '#FFFFFF',
              }}
            >
              Contact Expert
            </Typography>
            <SvgIcon name="arrow-right" size={12} color="#FFFFFF" />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default CustomerSidebar;
