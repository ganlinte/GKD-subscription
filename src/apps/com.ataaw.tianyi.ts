import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ataaw.tianyi',
  name: '天翼生活',
  groups: [
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: ['[vid="version"]', '[vid="ignore"]'],
      snapshotUrls: 'https://i.gkd.li/import/13867468',
    },
  ],
});
