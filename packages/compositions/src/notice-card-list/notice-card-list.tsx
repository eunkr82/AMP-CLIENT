import { CardNotice, EmptyView } from '@amp/ads-ui';

<<<<<<< HEAD
import * as styles from './notice-card-list.css';

// TODO: 현재는 목데이터 기준, 추후 type에서 import
export interface NoticeItem {
  announcementId: number;
  imageUrl: string | null;
  title: string;
  content: string;
  isPinned: boolean;
  createdAt: string;
  categoryName?: string;
=======
import { IMAGES } from '../assets/index';

import * as styles from './notice-card-list.css';

export interface NoticeItem {
  noticeId: number;
  categoryName: string;
  title: string;
  content: string;
  imageUrl: string | null;
  isPinned: boolean;
  isSaved: boolean;
  createdAt: string;
>>>>>>> develop
}

interface NoticeCardListProps {
  notices: NoticeItem[];
  onItemClick: (id: number) => void;
}

<<<<<<< HEAD
// TODO: 기본 이미지 상수 import
const DEFAULT_IMG = ''; // 예: '/assets/images/default-notice.png'
=======
const DEFAULT_IMG = IMAGES.EMPTY_NOTICE_CARD;
>>>>>>> develop

const NoticeCardList = ({ notices, onItemClick }: NoticeCardListProps) => {
  if (notices.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <EmptyView title='작성된 공지가 없어요.' />
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      {notices.map((notice) => (
<<<<<<< HEAD
        <div key={notice.announcementId} className={styles.card}>
          <CardNotice
            // TODO: 기본 이미지 처리 로직 적용
=======
        <div key={notice.noticeId} className={styles.card}>
          <CardNotice
>>>>>>> develop
            imageUrl={notice.imageUrl || DEFAULT_IMG}
            title={notice.title}
            content={notice.content}
            isPinned={notice.isPinned}
            createdAt={notice.createdAt}
<<<<<<< HEAD
            onClick={() => onItemClick(notice.announcementId)}
=======
            onClick={() => onItemClick(notice.noticeId)}
>>>>>>> develop
          />
        </div>
      ))}
    </div>
  );
};

export default NoticeCardList;
