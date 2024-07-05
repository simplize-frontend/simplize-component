import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Typography from '@/components/Typography';

const cx = classNames.bind(styles);

const DownloadPage: React.FC = (): JSX.Element => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <Typography variant="heading_two" className={cx('title-heading')}>
          Tải app ngay tại đây!
        </Typography>
        <Typography className={cx('heading-lorem')} variant="heading_six">
          Tải App Simplize ngay hôm nay để bắt đầu hành trình đầu tư thông minh
          và hiệu quả! Quét mã QR hoặc nhấp vào link dưới đây để tải App.
        </Typography>
        <div className={cx('heading-app')}>
          <div
            style={{
              width: '156px',
            }}
          >
            <img
              src={'https://static.simplize.vn/static/qr-dev.png'}
              alt="qr-code"
            />
          </div>
          <div className={cx('heading-wrapper')}>
            <a
              target="_blank"
              href="https://apps.apple.com/vn/app/simplize-ch%E1%BB%A9ng-kho%C3%A1n-%C4%91%E1%BA%A7u-t%C6%B0/id1659974715"
              className={cx('heading-store')}
            >
              <img
                src="https://cdn.simplize.vn/simplizevn/community/images/1708059428811-app-store.png"
                alt="app-store"
                style={{
                  margin: 'auto',
                }}
              />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.simplize.app&pli=1"
              className={cx('heading-store')}
              style={{
                marginTop: 8,
              }}
            >
              <img
                src="https://cdn.simplize.vn/simplizevn/community/images/1708059428784-google-play.png"
                alt="google-store"
                style={{
                  margin: 'auto',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
