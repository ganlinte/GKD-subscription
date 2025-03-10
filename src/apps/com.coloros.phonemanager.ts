import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.phonemanager',
  name: 'OPPO手机管家',
  groups: [
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[text="取消"] < [id="com.coloros.phonemanager:id/buttonPanel"] > [text="更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13194979',
        },
      ],
    },
  ],
});
