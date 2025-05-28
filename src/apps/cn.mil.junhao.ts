import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.mil.junhao',
  name: '中国军号',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[id="cn.mil.junhao:id/splash_adv_ship"]',
          snapshotUrls: 'https://i.gkd.li/import/13806892',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-首页右侧浮窗',
      fastQuery: true,
      activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
      rules: [
        {
          matches:
            '@ImageView - FrameLayout - ImageView < FrameLayout <2 [id="cn.mil.junhao:id/fragment_containerx"]',
          snapshotUrls: 'https://i.gkd.li/import/13806894',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-意见反馈浮窗',
      fastQuery: true,
      activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
      rules: [
        {
          matches:
            '@ImageView - FrameLayout - ImageView < [id="cn.mil.junhao:id/float_feedback"]',
          snapshotUrls: 'https://i.gkd.li/import/13806896',
        },
      ],
    },
  ],
});
