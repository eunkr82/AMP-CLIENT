<<<<<<< HEAD
import { CardNotice, EmptyView } from '@amp/ads-ui';

import { savedNoticesData } from '@shared/mocks/saved-notices-data';
=======
import { useQuery } from '@tanstack/react-query';

import { CardNotice, EmptyView } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';

import { SAVED_NOTICES_QUERY_OPTIONS } from '@features/saved-notices/apis/query';
>>>>>>> develop

import * as styles from './saved-notices.css';

const SavedNoticesPage = () => {
<<<<<<< HEAD
  if (savedNoticesData.notices.length === 0) {
=======
  const { data: savedNoticesData, isPending } = useQuery(
    SAVED_NOTICES_QUERY_OPTIONS.LIST({ page: 0, size: 20 }),
  );

  if (isPending) {
    return <Loading />;
  }

  if (!savedNoticesData || savedNoticesData.notices.length === 0) {
>>>>>>> develop
    return (
      <section className={styles.page}>
        <div className={styles.empty}>
          <EmptyView title='저장한 공지가 없어요!' />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.list}>
        {savedNoticesData.notices.map((notice, index) => (
          <div key={notice.noticeId}>
            <CardNotice
<<<<<<< HEAD
              imageUrl={notice.imageUrl ?? notice.festival.mainImageUrl}
              title={notice.title}
              content={notice.content}
=======
              imageUrl={notice.imageUrl}
              title={notice.title}
              content={notice.categoryName}
>>>>>>> develop
            />
            {index < savedNoticesData.notices.length - 1 && (
              <div className={styles.divider} aria-hidden='true' />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavedNoticesPage;
