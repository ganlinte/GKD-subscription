import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.ccspeed',
  name: 'CC加速器',
  groups: [
    {
      key: 1,
      enable: false,
      name: '全屏广告-加速页-分享抽奖浮窗',
      activityIds: 'cn.ccspeed.app.MainActivity',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'activity',
      actionMaximum: 1,
      rules: [
        {
          matches:
            'ImageView[id="cn.ccspeed:id/iv_float"] - @ImageView < FrameLayout[id="cn.ccspeed:id/float_layout"]',
          snapshotUrls: 'https://i.gkd.li/import/13539299',
        },
      ],
    },
  ],
});
