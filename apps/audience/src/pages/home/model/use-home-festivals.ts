<<<<<<< HEAD
import { useState } from 'react';

import { TAB_ALL, type TabValue } from '@widgets/home/constants/home-tabs';

import {
  allFestivalData,
  upcomingFestivalData,
} from '@shared/mocks/home-festival-data';
=======
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

import {
  TAB_ALL,
  TAB_UPCOMING,
  type TabValue,
} from '@widgets/home/constants/home-tabs';

import { HOME_QUERY_OPTIONS, putWishList } from '@features/home/apis/query';

>>>>>>> develop
import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

const useHomeFestivals = () => {
  const [selectedTab, setSelectedTab] = useState<TabValue>(TAB_ALL);
<<<<<<< HEAD
  const [allFestivals, setAllFestivals] = useState<AllFestivalItem[]>(
    allFestivalData.data.festivals,
  );
  const [upcomingFestivals, setUpcomingFestivals] = useState<
    UpcomingFestivalItem[]
  >(upcomingFestivalData.data.festivals);
=======
  const [allFestivals, setAllFestivals] = useState<AllFestivalItem[]>([]);
  const [upcomingFestivals, setUpcomingFestivals] = useState<
    UpcomingFestivalItem[]
  >([]);
  const { data: allFestivalsData } = useQuery({
    ...HOME_QUERY_OPTIONS.ALL_FESTIVALS({ page: 0, size: 20 }),
    enabled: selectedTab === TAB_ALL,
  });
  const { data: plannedFestivalsData } = useQuery({
    ...HOME_QUERY_OPTIONS.PLANNED_FESTIVALS({ page: 0, size: 20 }),
    enabled: selectedTab === TAB_UPCOMING,
  });
  const { data: upcomingFestivalData } = useQuery({
    ...HOME_QUERY_OPTIONS.UPCOMING_FESTIVAL(),
  });

  useEffect(() => {
    if (allFestivalsData?.festivals) {
      setAllFestivals(allFestivalsData.festivals);
    }
  }, [allFestivalsData]);

  useEffect(() => {
    if (plannedFestivalsData?.festivals) {
      setUpcomingFestivals(plannedFestivalsData.festivals);
    }
  }, [plannedFestivalsData]);
>>>>>>> develop

  const removeById = <T extends { festivalId: number }>(
    list: T[],
    festivalId: number,
  ) => list.filter((item) => item.festivalId !== festivalId);

  const toggleWishList = <T extends { festivalId: number; wishList: boolean }>(
    list: T[],
    festivalId: number,
    nextSelected: boolean,
  ) =>
    list.map((item) =>
      item.festivalId === festivalId
        ? { ...item, wishList: nextSelected }
        : item,
    );

  const createUpcomingFromAll = (festivalId: number) => {
    const target = allFestivals.find((item) => item.festivalId === festivalId);
    if (!target) {
      return null;
    }
    return {
      festivalId: target.festivalId,
      title: target.title,
      mainImageUrl: target.mainImageUrl,
<<<<<<< HEAD
=======
      location: target.location,
>>>>>>> develop
      period: target.period,
      status: '관람 예정',
      wishList: true,
      dDay: target.dDay,
    };
  };

<<<<<<< HEAD
=======
  const wishListMutation = useMutation({
    mutationFn: ({
      festivalId,
      wishList,
    }: {
      festivalId: number;
      wishList: boolean;
    }) => putWishList(festivalId, { wishList }),
  });

>>>>>>> develop
  const handleToggleAllFestival = (
    festivalId: number,
    nextSelected: boolean,
  ) => {
<<<<<<< HEAD
=======
    const prevAll = allFestivals;
    const prevUpcoming = upcomingFestivals;

>>>>>>> develop
    setAllFestivals((prev) => toggleWishList(prev, festivalId, nextSelected));
    setUpcomingFestivals((prev) => {
      if (nextSelected) {
        if (prev.some((item) => item.festivalId === festivalId)) {
          return prev;
        }
        const created = createUpcomingFromAll(festivalId);
        return created ? [...prev, created] : prev;
      }
      return removeById(prev, festivalId);
    });
<<<<<<< HEAD
=======

    wishListMutation.mutate(
      { festivalId, wishList: nextSelected },
      {
        onError: () => {
          setAllFestivals(prevAll);
          setUpcomingFestivals(prevUpcoming);
        },
      },
    );
>>>>>>> develop
  };

  const handleToggleUpcomingFestival = (
    festivalId: number,
    nextSelected: boolean,
  ) => {
<<<<<<< HEAD
=======
    const prevAll = allFestivals;
    const prevUpcoming = upcomingFestivals;

>>>>>>> develop
    setUpcomingFestivals((prev) =>
      nextSelected
        ? toggleWishList(prev, festivalId, nextSelected)
        : removeById(prev, festivalId),
    );
    setAllFestivals((prev) => toggleWishList(prev, festivalId, nextSelected));
<<<<<<< HEAD
=======

    wishListMutation.mutate(
      { festivalId, wishList: nextSelected },
      {
        onError: () => {
          setAllFestivals(prevAll);
          setUpcomingFestivals(prevUpcoming);
        },
      },
    );
>>>>>>> develop
  };

  return {
    allFestivals,
    upcomingFestivals,
<<<<<<< HEAD
=======
    bannerFestival: upcomingFestivalData
      ? {
          festivalId: upcomingFestivalData.festivalId,
          title: upcomingFestivalData.title,
          mainImageUrl: upcomingFestivalData.mainImageUrl,
          location: upcomingFestivalData.location,
          period: `${upcomingFestivalData.startDate} ~ ${upcomingFestivalData.endDate}`,
          dDay: upcomingFestivalData.dday,
        }
      : undefined,
>>>>>>> develop
    selectedTab,
    setSelectedTab,
    handleToggleAllFestival,
    handleToggleUpcomingFestival,
  };
};

export default useHomeFestivals;
