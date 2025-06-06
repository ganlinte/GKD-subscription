import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hpbr.directhires',
  name: '店长直聘',
  groups: [
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.hpbr.directhires:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13774242',
        },
      ],
    },
  ],
});
