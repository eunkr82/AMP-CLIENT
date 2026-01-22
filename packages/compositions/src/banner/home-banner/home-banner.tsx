<<<<<<< HEAD
=======
import clsx from 'clsx';

>>>>>>> develop
import { CardHome } from '@amp/ads-ui';

import * as styles from './home-banner.css';

interface HomeBannerBaseProps {
  nickname: string;
}

interface HomeBannerCardProps extends HomeBannerBaseProps {
  status: 'card';
  title: string;
  location: string;
  date: string;
  dday: number;
}

interface HomeBannerNoneProps extends HomeBannerBaseProps {
  status: 'none';
}

type HomeBannerProps = HomeBannerCardProps | HomeBannerNoneProps;

const HomeBanner = (props: HomeBannerProps) => {
  const { nickname, status } = props;

  const message =
    status === 'card' ? (
      <>
        다가오는 <br /> 공연을 확인해보세요!
      </>
    ) : (
      <>
        일정이 아직 없어요 <br /> 공연을 추가해보세요!
      </>
    );

  if (status === 'card') {
    const { title, location, date, dday } = props;

    return (
<<<<<<< HEAD
      <article className={styles.banner}>
=======
      <article className={clsx(styles.banner, styles.bannerCard)}>
>>>>>>> develop
        <p className={styles.text}>
          <span className={styles.nickname}>{nickname}님,</span> {message}
        </p>
        <CardHome title={title} location={location} date={date} dday={dday} />
      </article>
    );
  }

  return (
<<<<<<< HEAD
    <article className={styles.banner}>
=======
    <article className={clsx(styles.banner, styles.bannerNone)}>
>>>>>>> develop
      <p className={styles.text}>
        <span className={styles.nickname}>{nickname}님,</span> {message}
      </p>
    </article>
  );
};

export default HomeBanner;
