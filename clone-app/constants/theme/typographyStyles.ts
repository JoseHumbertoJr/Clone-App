import { typography } from './typography';

export const typographyStyles = {

  /* ================= HEADLINE ================= */
  headlineLarge: {
    fontFamily: typography.family.semibold,
    fontSize: 32,
    lineHeight: 40,
  },

  headlineMedium: {
    fontFamily: typography.family.semibold,
    fontSize: 28,
    lineHeight: 36,
  },

  headlineSmall: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.xl,
    lineHeight: 32,
  },

  /* ================= TITLE ================= */
  titleLarge: {
    fontFamily: typography.family.semibold,
    fontSize: 22,
    lineHeight: 28,
  },

  titleMedium: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.md,
    lineHeight: 24,
  },

  titleSmall: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.sm,
    lineHeight: 20,
    letterSpacing: 0.014,
  },

  /* ================= LABEL ================= */
  labelLarge: {
    fontFamily: typography.family.book,
    fontSize: typography.sizes.md,
    lineHeight: 20,
  },

  labelMedium: {
    fontFamily: typography.family.regular,
    fontSize: typography.sizes.xs,
    lineHeight: 16,
  },

  labelSmall: {
    fontFamily: typography.family.regular,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.05,
  },

  labelLargeLink: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.sm,
    lineHeight: 20,
    textDecorationLine: 'underline',
  },

  labelMediumLink: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.xs,
    lineHeight: 16,
    textDecorationLine: 'underline',
  },

  labelSmallLink: {
    fontFamily: typography.family.semibold,
    fontSize: 10,
    lineHeight: 12,
    textDecorationLine: 'underline',
  },

  /* ================= BODY ================= */
  bodyLarge: {
    fontFamily: typography.family.book,
    fontSize: typography.sizes.md,
    lineHeight: 20,
  },

  bodyMedium: {
    fontFamily: typography.family.book,
    fontSize: typography.sizes.sm,
    lineHeight: 20,
  },

  bodySmall: {
    fontFamily: typography.family.book,
    fontSize: typography.sizes.xs,
    lineHeight: 16,
  },

  bodyLargeStrong: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.md,
    lineHeight: 20,
  },

  bodyMediumStrong: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.sm,
    lineHeight: 20,
  },

  bodySmallStrong: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.xs,
    lineHeight: 16,
  },

  bodyLargeLink: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.md,
    lineHeight: 20,
    textDecorationLine: 'underline',
  },

  bodyMediumLink: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.sm,
    lineHeight: 20,
    textDecorationLine: 'underline',
  },

  bodySmallLink: {
    fontFamily: typography.family.semibold,
    fontSize: typography.sizes.xs,
    lineHeight: 16,
    textDecorationLine: 'underline',
  },
} as const;
