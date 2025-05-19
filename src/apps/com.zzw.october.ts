import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zzw.october',
  name: '志愿汇',
  groups: [
    {
      key: 1,
      name: '全屏广告-我的',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.zzw.october.MainActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout > ImageView[text=null]',
          snapshotUrls: 'https://i.gkd.li/import/14661569',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-主页广告',
      activityIds: ['com.zzw.october.MainActivity'],
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches:
            '[id="com.zzw.october:id/interact_ad_root"] >n ImageView[id="com.zzw.october:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12842675',
            'https://i.gkd.li/import/12869369',
          ],
        },
      ],
    },
  ],
});
