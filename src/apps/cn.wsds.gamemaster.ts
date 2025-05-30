import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wsds.gamemaster',
  name: '迅游手游加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid="splash_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13930391',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-卡片广告',
      desc: '点击X-点击不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails',
          matches:
            '@ImageView - TextView < ViewGroup <n * <n * <n * <n * < [id="cn.wsds.gamemaster:id/feed_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/13930398',
        },
        {
          preKeys: 0,
          activityIds: 'cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails',
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13930399',
        },
      ],
    },
  ],
});
