import {
  Clock,
  PhoneMissed,
  DollarSign,
  TrendingDown,
  Zap,
  Bot,
  Calendar,
  MessageSquare,
  BarChart3,
  Shield,
  RefreshCw,
  Users,
  Target,
  Mail,
  Phone,
  Sparkles,
  TrendingUp,
  AlertCircle,
  Database,
  UserX,
  History,
  Heart,
  CheckCircle,
} from "lucide-react";
import type { IconName } from "./types";
import type { LucideIcon } from "lucide-react";

export const iconMap: Record<IconName, LucideIcon> = {
  Clock,
  PhoneMissed,
  DollarSign,
  TrendingDown,
  Zap,
  Bot,
  Calendar,
  MessageSquare,
  BarChart3,
  Shield,
  RefreshCw,
  Users,
  Target,
  Mail,
  Phone,
  Sparkles,
  TrendingUp,
  AlertCircle,
  Database,
  UserX,
  History,
  Heart,
  CheckCircle,
};

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}
