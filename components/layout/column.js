import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './column.module.scss';

const Column = ({
  children,
  className,
  justifyContent,
  marginBottomSm,
  marginBottomMd,
  marginBottomLg,
  sectionBorder,
  sectionPadding,
  sectionPaddingCompact,
  sm,
  md,
  lg,
  xl,
  ...props
}) => {
  const columnClassNames = clsx({
    [`${styles['column']}`]: true,
    [`${styles[`column-sm-${sm}`]}`]: sm,
    [`${styles[`column-md-${md}`]}`]: md,
    [`${styles[`column-lg-${lg}`]}`]: lg,
    [`${styles[`column-xl-${xl}`]}`]: xl,
    [`${styles['justify-content']}`]: justifyContent,
    [`${styles[`margin-bottom-sm-${marginBottomSm}`]}`]: marginBottomSm,
    [`${styles[`margin-bottom-md-${marginBottomMd}`]}`]: marginBottomMd,
    [`${styles[`margin-bottom-lg-${marginBottomLg}`]}`]: marginBottomLg,
    [`${styles['section-border']}`]: sectionBorder,
    [`${styles['section-padding']}`]: sectionPadding,
    [`${styles['section-padding-compact']}`]: sectionPaddingCompact,
    [`${className}`]: className
  });

  return (
    <div className={columnClassNames} {...props}>
      {children}
    </div>
  );
};

Column.prototypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  justifyContent: PropTypes.bool,
  marginBottomSm: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  marginBottomMd: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  marginBottomLg: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  sectionBorder: PropTypes.bool,
  sectionPadding: PropTypes.bool,
  sectionPaddingCompact: PropTypes.bool,
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8])
};

export default Column;
