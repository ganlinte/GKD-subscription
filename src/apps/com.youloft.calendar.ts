import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youloft.calendar',
  name: '万年历',
  groups: [
    {
      key: 1,
      name: '全屏广告-悬浮广告',
      rules: [
        {
          key: 0,
          name: '万年历页面-右侧悬浮广告',
          activityIds: 'com.youloft.calendar.MainActivity',
          fastQuery: true,
          matches: '[id="com.youloft.calendar:id/ad_iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13348416',
        },
      ],
    },
  ],
});
