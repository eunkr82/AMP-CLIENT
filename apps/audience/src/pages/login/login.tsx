import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { GoogleIcon } from '@amp/ads-ui/icons';
<<<<<<< HEAD
import { ResultView } from '@amp/compositions';
=======
import { ENV } from '@amp/apis';
import { ResultView } from '@amp/compositions';
import { OAUTH_PATH } from '@amp/shared/constants';
>>>>>>> develop

import { IMAGES } from '@shared/assets';
import { ROUTE_PATH } from '@shared/constants/path';

import * as styles from './login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
<<<<<<< HEAD
    //TODO: API 연결
  };

  const handleClick = () => {
=======
    window.location.href = `${ENV.AUDIENCE_BASE_URL}${OAUTH_PATH.GOOGLE}`;
  };

  const handleSkipLogin = () => {
>>>>>>> develop
    navigate(ROUTE_PATH.HOME);
  };
  return (
    <div className={styles.container}>
      <ResultView
<<<<<<< HEAD
        title={`흩어져 있던 공연 공지를\n관객에게 가장 가까이`}
        image={<img src={IMAGES.ONBOARDING} alt='로그인 안내 이미지' />}
=======
        title={`작은 공지도 크게 울리는\n공연 공지의 공식, AMP`}
        image={<img src={IMAGES.ONBOARDING} alt='' />}
>>>>>>> develop
      />
      <div className={styles.ctaButtonContainer}>
        <CtaButton type='icon' color='white' onClick={handleLoginClick}>
          <GoogleIcon />
          <span>Google로 시작하기</span>
        </CtaButton>
      </div>
<<<<<<< HEAD
      <button type='button' onClick={handleClick} className={styles.skipButton}>
=======
      <button
        type='button'
        onClick={handleSkipLogin}
        className={styles.skipButton}
      >
>>>>>>> develop
        로그인 없이 공지 확인하기
      </button>
    </div>
  );
};

export default Login;
