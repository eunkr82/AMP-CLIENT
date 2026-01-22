import { HomeBanner } from '@amp/compositions';

import HomeFestivalSection from '@widgets/home/components/home-festival-section/home-festival-section';

<<<<<<< HEAD
import { homeData } from '@shared/mocks/home-data';

=======
>>>>>>> develop
import useHomeFestivals from './model/use-home-festivals';

import { page } from './home.css';

const HomePage = () => {
  const nickname = '관객 이름';
<<<<<<< HEAD
  const upcomingFestival = homeData.data;
  const {
    allFestivals,
=======
  const {
    allFestivals,
    bannerFestival,
>>>>>>> develop
    upcomingFestivals,
    selectedTab,
    setSelectedTab,
    handleToggleAllFestival,
    handleToggleUpcomingFestival,
  } = useHomeFestivals();

<<<<<<< HEAD
  const banner = upcomingFestival ? (
    <HomeBanner
      nickname={nickname}
      status='card'
      title={upcomingFestival.title}
      location={upcomingFestival.location}
      date={upcomingFestival.period}
      dday={upcomingFestival.dDay}
=======
  const banner = bannerFestival ? (
    <HomeBanner
      nickname={nickname}
      status='card'
      title={bannerFestival.title}
      location={bannerFestival.location}
      date={bannerFestival.period}
      dday={bannerFestival.dDay}
>>>>>>> develop
    />
  ) : (
    <HomeBanner nickname={nickname} status='none' />
  );

  return (
    <div className={page}>
      {banner}
      <HomeFestivalSection
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        allFestivals={allFestivals}
        upcomingFestivals={upcomingFestivals}
        onToggleAllFestival={handleToggleAllFestival}
        onToggleUpcomingFestival={handleToggleUpcomingFestival}
      />
    </div>
  );
};

export default HomePage;
