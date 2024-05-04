import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ponyemu.main',
  name: '小马模拟器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ponyemu.main.activitys.AdLaunchActivity',
          matches: 'TextView[text*="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/14892481',
        },
      ],
    },
  ],
});
