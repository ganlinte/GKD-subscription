import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dmzjsq.manhua',
  name: '动漫之家社区',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',

      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12885087',
        },
        {
          key: 1,
          activityIds: 'com.dmzj.manhua.ui.home.HomeTabsActivitys',
          matches:
            'ImageView < FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12893731',
        },
      ],
    },
  ],
});
