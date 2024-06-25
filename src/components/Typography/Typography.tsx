import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
const typo = classNames.bind(styles);
export type VARIANT =
  | 'heading_one'
  | 'heading_two'
  | 'heading_three'
  | 'heading_fourth'
  | 'heading_fifth'
  | 'heading_six'
  | 'sub_heading_one'
  | 'sub_heading_two'
  | 'sub_heading_three'
  | 'sub_heading_four'
  | 'body_one'
  | 'body_two'
  | 'body_content_one'
  | 'body_content_two'
  | 'body_content_three'
  | 'caption'
  | 'caption_two'
  | 'caption_three'
  | 'small_one'
  | 'small_two';

export enum Variant {
  heading_one = 'h1',
  heading_two = 'h2',
  heading_three = 'h3',
  heading_fourth = 'h4',
  heading_fifth = 'h5',
  heading_six = 'h6',

  sub_heading_one = 'h6',
  sub_heading_two = 'h6',
  sub_heading_three = 'h6',
  sub_heading_four = 'h6',

  body_one = 'span',
  body_two = 'span',
  body_content_one = 'span',
  body_content_two = 'span',
  body_content_three = 'span',

  caption = 'span',
  caption_two = 'span',
  caption_three = 'span',

  small_one = 'span',
  small_two = 'span',
}

interface Props extends React.ComponentPropsWithoutRef<'span'> {
  children?: React.ReactNode;
  variant?: VARIANT;
  component?: React.ElementType;
}

const Typography = React.forwardRef<any, Props>((props, ref) => {
  const {
    children,
    variant = 'body_one',
    className,
    component,
    ...rest
  } = props;

  const Component: any = component || Variant[variant];

  return (
    <Component
      ref={ref}
      className={typo('wapper', className, { [variant]: true })}
      {...rest}
    >
      {children}
    </Component>
  );
});

export default Typography;
