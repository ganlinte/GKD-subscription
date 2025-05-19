import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.showstartfans.activity',
  name: '秀动',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.showstartfans.activity.activitys.maintab.newmain.MainNewActivity',
          fastQuery: true,
          matches: '[id="com.showstartfans.activity:id/img_close_coupon"]',
          snapshotUrls: 'https://i.gkd.li/import/13670432',
        },
      ],
    },
  ],
});
