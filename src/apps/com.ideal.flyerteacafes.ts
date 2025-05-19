import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ideal.flyerteacafes',
  name: '飞客',
  groups: [
    {
      key: 3,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ideal.flyerteacafes.ui.HomeActivity',
      rules:
        '@[id="com.ideal.flyerteacafes:id/close"] - FrameLayout > [id="com.ideal.flyerteacafes:id/tv_time_down"]',
      snapshotUrls: 'https://i.gkd.li/import/13466119',
    },
  ],
});
