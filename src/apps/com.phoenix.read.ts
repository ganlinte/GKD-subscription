import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '局部广告-阅读-底部卡片广告',
      desc: '点击X',
      fastQuery: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: [
        {
          matches:
            '@ImageView < ViewGroup <3 ViewGroup[childCount=5] <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id="com.phoenix.read:id/root_view"]',
          snapshotUrls: 'https://i.gkd.li/i/27986281',
        },
      ],
    },
  ],
});
