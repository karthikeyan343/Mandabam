import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Image from 'next/image';
import { SvgIcon } from '@/components/shared/SvgIcon';
import type { CustomerHeaderProps } from '@/types';

/**
 * Reusable CustomerHeader component matching the top bar of the Customer Dashboard.
 */
export const CustomerHeader: React.FC<CustomerHeaderProps> = ({
  userName = 'USER',
  userRole = 'Customer',
  userAvatarUrl = '/images/dashboard/avatar.png',
  notificationCount = 5,
  favoritesCount = 3,
  searchPlaceholder = 'Search venues, services, or packages...',
  onSearch,
  onNotificationsClick,
  onFavoritesClick,
  onProfileClick,
  className,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <Box
      component="header"
      className={className}
      sx={{
        width: '100%',
        height: '80px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        px: { xs: 2, sm: 3, md: '32px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      {/* Search Input Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: { xs: '200px', sm: '320px', md: '440px' },
          height: '44px',
          px: '16px',
          backgroundColor: '#F8FAFC',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          '&:focus-within': {
            borderColor: '#2563EB',
            boxShadow: '0px 0px 0px 3px rgba(37, 99, 235, 0.1)',
          },
        }}
      >
        <Box sx={{ color: '#94A3B8', mr: '12px', display: 'flex', alignItems: 'center' }}>
          <SvgIcon name="search" size={18} />
        </Box>
        <InputBase
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={searchPlaceholder}
          fullWidth
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '14px',
            color: '#0F172A',
            '& input::placeholder': {
              color: '#94A3B8',
              opacity: 1,
            },
          }}
        />
      </Box>

      {/* Action Badges & Profile Dropdown */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: '16px' } }}>
        {/* Favorites Button */}
        <IconButton
          onClick={onFavoritesClick}
          aria-label="Favorites"
          sx={{
            color: '#475569',
            p: '8px',
            '&:hover': { backgroundColor: '#F8FAFC' },
          }}
        >
          <Badge
            badgeContent={favoritesCount}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#F43F5E',
                color: '#FFFFFF',
                fontSize: '10px',
                fontWeight: 700,
                height: '16px',
                minWidth: '16px',
                p: '0 4px',
              },
            }}
          >
            <SvgIcon name="heart" size={20} color="#475569" />
          </Badge>
        </IconButton>

        {/* Notifications Button */}
        <IconButton
          onClick={onNotificationsClick}
          aria-label="Notifications"
          sx={{
            color: '#475569',
            p: '8px',
            '&:hover': { backgroundColor: '#F8FAFC' },
          }}
        >
          <Badge
            badgeContent={notificationCount}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#EF4444',
                color: '#FFFFFF',
                fontSize: '10px',
                fontWeight: 700,
                height: '16px',
                minWidth: '16px',
                p: '0 4px',
              },
            }}
          >
            <SvgIcon name="bell" size={20} color="#475569" />
          </Badge>
        </IconButton>

        {/* Vertical Divider */}
        <Box
          sx={{
            width: '1px',
            height: '32px',
            backgroundColor: '#E2E8F0',
            mx: '4px',
            display: { xs: 'none', sm: 'block' },
          }}
        />

        {/* User Profile Button Trigger */}
        <Box
          component="button"
          type="button"
          onClick={onProfileClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            p: '4px',
            borderRadius: '12px',
            '&:hover': { backgroundColor: '#F8FAFC' },
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '9999px',
              overflow: 'hidden',
              boxShadow: '0px 0px 0px 2px #F1F5F9',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <Image
              src={userAvatarUrl}
              alt={userName}
              width={40}
              height={40}
              style={{ objectFit: 'cover' }}
            />
          </Box>

          <Box sx={{ textAlign: 'left', display: { xs: 'none', sm: 'block' } }}>
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '18px',
                color: '#1E293B',
              }}
            >
              {userName}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#94A3B8',
              }}
            >
              {userRole}
            </Typography>
          </Box>

          <SvgIcon name="chevron-down" size={14} color="#94A3B8" />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerHeader;
