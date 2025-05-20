import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'android.zhibo8',
  name: '直播吧',
  groups: [
    {
      key: 1,
      name: '局部广告-信息流广告',
      fastQuery: true,
      activityIds: '.ui.contollers.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '点击[查看详情]右侧x',
          matches:
            '@ImageView[id="android.zhibo8:id/iv_tip"][visibleToUser=true] -2 LinearLayout > TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12841134',
            'https://i.gkd.li/import/13786148',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '点击[不感兴趣]',
          matches: 'TextView[id="android.zhibo8:id/tv_title"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12841135',
        },
      ],
    },
  ],
});
