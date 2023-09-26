import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './row.module.scss';

const Row = ({
  borderBottom,
  children, 
  className,
  justifyContent,
  marginBottomSm,
  marginBottomMd,
  marginBottomLg,
  ...props
}) => {
  const rowClassNames = clsx({
    [`${styles['row']}`]: true,
    [`${styles['border-bottom']}`]: borderBottom,
    [`${styles['justify-content']}`]: justifyContent,
    [`${styles[`margin-bottom-sm-${marginBottomSm}`]}`]: marginBottomSm,
    [`${styles[`margin-bottom-md-${marginBottomMd}`]}`]: marginBottomMd,
    [`${styles[`margin-bottom-lg-${marginBottomLg}`]}`]: marginBottomLg,
    [`${className}`]: className
  });

  return (
    <div className={rowClassNames} {...props}>
      {children}
    </div>
  );
};

Row.prototypes = {
  borderBottom: PropTypes.bool,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  marginBottomSm: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  marginBottomMd: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  marginBottomLg: PropTypes.oneOf(['none', 'small', 'medium', 'large'])
};

export default Row;
