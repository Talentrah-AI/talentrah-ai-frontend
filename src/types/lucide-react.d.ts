declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = ComponentType<LucideProps>;

  export const Search: LucideIcon;
  export const Bell: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Globe: LucideIcon;
  export const Loader2: LucideIcon;
  export const Plus: LucideIcon;
  export const Crown: LucideIcon;
  export const Heart: LucideIcon;
  export const MapPin: LucideIcon;
  export const Building2: LucideIcon;
  export const X: LucideIcon;
} 