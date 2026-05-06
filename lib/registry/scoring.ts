
import { TransparencyIndicators } from './types.ts';

export function calculateTrustGrade(score: number): string {
  if (score >= 95) return 'A+';
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score === 0) return 'N/A';
  return 'D';
}

export function getIndicatorCount(indicators: TransparencyIndicators): number {
  return Object.values(indicators).filter(Boolean).length;
}

export function getScoreColor(score: number): string {
  if (score >= 90) return 'text-gfa-gold';
  if (score >= 70) return 'text-white/60';
  return 'text-red-500';
}
