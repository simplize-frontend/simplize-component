import { rem } from './rem';

export type FontSizes = typeof fontSizes;

export const fontSizes = {
  heading_one: rem(36),
  heading_two: rem(24),
  heading_three: rem(20),
  heading_fourth: rem(18),
  heading_fifth: rem(18),
  heading_six: rem(16),

  sub_heading_one: rem(16),
  sub_heading_two: rem(16),
  sub_heading_three: rem(14),
  sub_heading_four: rem(14),

  body_one: rem(16),
  body_two: rem(14),
  body_content_one: rem(20),
  body_content_two: rem(18),
  body_content_three: rem(16),

  caption: rem(12),
  caption_two: rem(12),
  caption_three: rem(12),

  small_one: rem(10),
  small_two: rem(10),
};
