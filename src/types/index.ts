// ─── Data shape types ──────────────────────────────────────────────────────

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface Project {
  tag: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  link?: string;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface WhyItem {
  text: string;
}

// ─── Component prop types ──────────────────────────────────────────────────

export interface RevealBlockProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  outline?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface SectionTagProps {
  children: React.ReactNode;
}

export interface SectionTitleProps {
  children: React.ReactNode;
  center?: boolean;
}

export interface ServiceCardProps extends Service {
  index: number;
}

export interface ProjectCardProps extends Project {
  index: number;
}

export interface TeamCardProps extends TeamMember {
  index: number;
}

export interface TestimonialCardProps extends Testimonial {
  index: number;
}

export interface FaqItemProps extends FaqItem {
  index: number;
}

// ─── Theme context type ────────────────────────────────────────────────────

export interface ThemeContextValue {
  dark: boolean;
  toggle: () => void;
}
