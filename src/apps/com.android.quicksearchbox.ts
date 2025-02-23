import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.quicksearchbox',
  name: '搜索',
  groups: [
    {
      key: 1,
      name: '局部广告-广告卡片',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="ad_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13897834',
    },
  ],
});
