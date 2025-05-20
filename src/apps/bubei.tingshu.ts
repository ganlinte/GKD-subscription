import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bubei.tingshu',
  name: '懒人听书',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 1,
          name: '播放列表-右侧悬浮广告',
          fastQuery: true,
          activityIds: '.listen.book.detail.activity.DetailActivity',
          matches:
            '@ImageView[id="bubei.tingshu:id/closeIcon"] - RelativeLayout[id="bubei.tingshu:id/rootView"] > ImageView[id="bubei.tingshu:id/adIcon"]',
          snapshotUrls: 'https://i.gkd.li/import/13348489',
        },
      ],
    },
  ],
});
