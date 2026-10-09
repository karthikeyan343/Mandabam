import type { ReactNode } from 'react';

// ==========================================
// Authentication Types
// ==========================================

export type AuthRole = 'customer' | 'venue_owner' | 'service_vendor' | 'admin';

export interface RoleOption {
  id: AuthRole;
  label: string;
  iconName: string;
}

export interface AuthHeaderProps {
  switchText: string;
  actionText: string;
  actionHref: string;
  className?: string;
}

export interface AuthMarketingFeature {
  title: string;
  description: string;
  iconName: string;
  badgeBg?: string;
}

export interface AuthMarketingPanelProps {
  categoryTracker?: string;
  headline?: string;
  headlineAccent?: string;
  subtitle?: string;
  features?: AuthMarketingFeature[];
  venuesCount?: string;
  ratingScore?: string;
  className?: string;
}

export interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}

export interface AuthPageShellProps {
  header: ReactNode;
  marketingPanel: ReactNode;
  authCard: ReactNode;
  copyrightText?: string;
  className?: string;
}

export interface RoleSelectorProps {
  selectedRole: AuthRole;
  onRoleChange: (role: AuthRole) => void;
  disabled?: boolean;
  className?: string;
}

export interface SocialAuthButtonsProps {
  onGoogleClick?: () => void;
  onAppleClick?: () => void;
  googleLabel?: string;
  appleLabel?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface OrDividerProps {
  label?: string;
  className?: string;
}

// ==========================================
// Shared Component Types
// ==========================================

export interface BrandLogoProps {
  width?: number;
  height?: number;
  href?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}

export interface FormFieldProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  autoComplete?: string;
  className?: string;
}

export interface PasswordFieldProps extends Omit<FormFieldProps, 'type' | 'endAdornment'> {
  showForgotPassword?: boolean;
  forgotPasswordHref?: string;
  onForgotPasswordClick?: () => void;
}

export interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}

export interface SvgIconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
}

// ==========================================
// Dashboard Types
// ==========================================

export type StatTheme = 'blue' | 'green' | 'orange' | 'purple';

export interface DashboardStatItem {
  id: string;
  label: string;
  value: string | number;
  changeText?: string;
  changeType?: 'positive' | 'neutral' | 'info';
  iconName: string;
  colorTheme: StatTheme;
}

export interface DashboardStatCardProps {
  stat: DashboardStatItem;
  className?: string;
}

export interface DashboardStatsGridProps {
  stats: DashboardStatItem[];
  className?: string;
}

export interface UpcomingEventData {
  id: string;
  title: string;
  status: string;
  tags: string[];
  venueName: string;
  location: string;
  dateText: string;
  timeText: string;
  guestCountText: string;
  advancePaid: string;
  remainingBalance: string;
  imageUrl?: string;
}

export interface UpcomingEventCardProps {
  event: UpcomingEventData;
  onViewDetails?: () => void;
  onManageBooking?: () => void;
  onBookmarkToggle?: () => void;
  isBookmarked?: boolean;
  className?: string;
}

export interface SpecialOfferBannerProps {
  tag?: string;
  title: string;
  description: string;
  ctaText?: string;
  imageUrl?: string;
  onCtaClick?: () => void;
  className?: string;
}

export interface VenueData {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  capacityText: string;
  priceText: string;
  imageUrl: string;
  locationText?: string;
  isFavorite?: boolean;
}

export interface VenueCardProps {
  venue: VenueData;
  onBook?: () => void;
  onFavoriteToggle?: () => void;
  className?: string;
}

export type ActivityType = 'booking' | 'payment' | 'vendor' | 'message' | 'reminder';

export interface ActivityItemData {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  isRead?: boolean;
}

export interface RecentActivityItemProps {
  activity: ActivityItemData;
  className?: string;
}

export interface RecentActivityListProps {
  activities: ActivityItemData[];
  title?: string;
  viewAllHref?: string;
  onViewAllClick?: () => void;
  className?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  iconName: string;
  badge?: string | number;
}

export interface CustomerSidebarProps {
  activePath?: string;
  onNavigate?: (path: string) => void;
  className?: string;
}

export interface CustomerHeaderProps {
  userName?: string;
  userRole?: string;
  userAvatarUrl?: string;
  notificationCount?: number;
  favoritesCount?: number;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  onNotificationsClick?: () => void;
  onFavoritesClick?: () => void;
  onProfileClick?: () => void;
  className?: string;
}

export interface CustomerDashboardShellProps {
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
  className?: string;
}
