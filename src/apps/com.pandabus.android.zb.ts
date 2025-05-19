import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pandabus.android.zb',
  name: '淄博出行',
  groups: [
    {
      key: 3,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.pandabus.android.zb:id/iv_native_dislike"]',
      snapshotUrls: 'https://i.gkd.li/import/13400177',
    },
  ],
});
