import * as React from 'react';
import Box from '@mui/material/Box';
import {
  User,
  Building,
  Briefcase,
  Shield,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  Search,
  Bell,
  Heart,
  Calendar,
  Clock,
  Location,
  ArrowRight,
  ArrowUp,
  ChevronDown,
  Check,
  Star,
  Sparkles,
} from 'reicon-react';
import { Google, Apple, MailOutlined } from '@mui/icons-material';
import type { SvgIconProps } from '@/types';

/**
 * Centralized typed icon adapter component.
 * Exclusively wraps approved icon libraries: `reicon-react` and `@mui/icons-material`.
 * Contains ZERO custom SVG path definitions.
 */
export const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  size = 20,
  color = 'currentColor',
  className,
}) => {
  const numSize = typeof size === 'string' ? parseInt(size, 10) || 20 : size;

  const renderApprovedIcon = () => {
    switch (name) {
      // ReIcon: User & Profiles
      case 'user':
      case 'profile':
        return <User size={numSize} color={color} />;

      // ReIcon: Venues & Buildings
      case 'cellar':
      case 'venue':
      case 'building':
        return <Building size={numSize} color={color} />;

      // ReIcon: Vendors & Business
      case 'vendor':
      case 'briefcase':
        return <Briefcase size={numSize} color={color} />;

      // ReIcon: Security & Admin
      case 'admin':
      case 'shield':
        return <Shield size={numSize} color={color} />;

      case 'shield-check':
        return <ShieldCheck size={numSize} color={color} />;

      // ReIcon: Security Credentials
      case 'lock':
        return <Lock size={numSize} color={color} />;

      case 'eye':
        return <Eye size={numSize} color={color} />;

      case 'eye-off':
        return <EyeOff size={numSize} color={color} />;

      // ReIcon: Interface Navigation & Actions
      case 'search':
        return <Search size={numSize} color={color} />;

      case 'bell':
      case 'notification':
        return <Bell size={numSize} color={color} />;

      case 'heart':
      case 'favorite':
        return <Heart size={numSize} color={color} />;

      case 'calendar':
        return <Calendar size={numSize} color={color} />;

      case 'clock':
        return <Clock size={numSize} color={color} />;

      case 'map-pin':
      case 'location':
        return <Location size={numSize} color={color} />;

      case 'arrow-right':
        return <ArrowRight size={numSize} color={color} />;

      case 'arrow-up':
        return <ArrowUp size={numSize} color={color} />;

      case 'chevron-down':
        return <ChevronDown size={numSize} color={color} />;

      case 'check':
        return <Check size={numSize} color={color} />;

      case 'star':
        return <Star size={numSize} color={color} weight="Filled" />;

      case 'sparkle':
      case 'sparkles':
        return <Sparkles size={numSize} color={color} />;

      // @mui/icons-material: Communication & Social Providers
      case 'mail':
      case 'email':
        return <MailOutlined sx={{ fontSize: numSize, color }} />;

      case 'google':
        return <Google sx={{ fontSize: numSize, color: '#4285F4' }} />;

      case 'apple':
        return <Apple sx={{ fontSize: numSize, color: color === 'currentColor' ? '#000000' : color }} />;

      default:
        // Default fallback from approved library (reicon-react)
        return <Star size={numSize} color={color} />;
    }
  };

  return (
    <Box
      component="span"
      className={className}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 0,
        verticalAlign: 'middle',
      }}
    >
      {renderApprovedIcon()}
    </Box>
  );
};

export default SvgIcon;
