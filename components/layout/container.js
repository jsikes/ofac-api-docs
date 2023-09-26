import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './container.module.scss';

const Container = ({
  children,
  className,
  marginBottomSm,
  marginBottomMd,
  marginBottomLg,
  marginTopSm,
  marginTopMd,
  marginTopLg,
  noAutoMargin,
  paddingBottomSm,
  paddingBottomMd,
  paddingBottomLg,
  paddingTopSm,
  paddingTopMd,
  paddingTopLg,
  size,
  ...props
}) => {
  const containerClassNames = clsx({
    [`${styles['container-lg']}`]: !size || size === 'lg',
    [`${styles['container-md']}`]: size === 'md',
    [`${styles['container-sm']}`]: size === 'sm',
    [`${className}`]: className,
    [`${styles[`margin-bottom-sm-${marginBottomSm}`]}`]: marginBottomSm,
    [`${styles[`margin-bottom-md-${marginBottomMd}`]}`]: marginBottomMd,
    [`${styles[`margin-bottom-lg-${marginBottomLg}`]}`]: marginBottomLg,
    [`${styles[`margin-top-sm-${marginTopSm}`]}`]: marginTopSm,
    [`${styles[`margin-top-md-${marginTopMd}`]}`]: marginTopMd,
    [`${styles[`margin-top-lg-${marginTopLg}`]}`]: marginTopLg,
    [`${styles['container-no-auto-margin']}`]: noAutoMargin,
    [`${styles[`padding-bottom-sm-${paddingBottomSm}`]}`]: paddingBottomSm,
    [`${styles[`padding-bottom-md-${paddingBottomMd}`]}`]: paddingBottomMd,
    [`${styles[`padding-bottom-lg-${paddingBottomLg}`]}`]: paddingBottomLg,
    [`${styles[`padding-top-sm-${paddingTopSm}`]}`]: paddingTopSm,
    [`${styles[`padding-top-md-${paddingTopMd}`]}`]: paddingTopMd,
    [`${styles[`padding-top-lg-${paddingTopLg}`]}`]: paddingTopLg
  });

  return (
    <div className={containerClassNames} {...props}>
      {children}
    </div>
  );
};

Container.prototypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  marginBottomSm: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  marginBottomMd: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  marginBottomLg: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  marginTopSm: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  marginTopMd: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  marginTopLg: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  noAutoMargin: PropTypes.bool,
  paddingBottomSm: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  paddingBottomMd: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  paddingBottomLg: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  paddingTopSm: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  paddingTopMd: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  paddingTopLg: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge', '2xlarge']),
  size: PropTypes.oneOf(['lg', 'md', 'sm'])
};

export default Container;
