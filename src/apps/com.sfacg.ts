import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      quickFind: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.sf.ui.launcher.LauncherActivity',
          matches: 'TextView[text*="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/14320791',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-新春小说折扣季',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.sf.ui.main.MainActivity',
      rules: 'ImageView[id="com.sfacg:id/imgClose"]',
      snapshotUrls: 'https://i.gkd.li/import/14427490',
    },
  ],
});
