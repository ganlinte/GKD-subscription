import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hypergryph.skland',
  name: '森空岛',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.hypergryph.skland.MainActivity'],
      rules: '[text*="青少年模式"] +n [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13197012',
    },
  ],
});
