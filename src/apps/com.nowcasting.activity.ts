import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nowcasting.activity',
  name: '彩云天气',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告_VIP',
      fastQuery: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          matches:
            '[text="开心收下"] + [id="com.nowcasting.activity:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13405130',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告_外部应用',
      fastQuery: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          matches: [
            '[id=null][text^="立即" || text^="领取" || text^="了解"][text.length=4]',
            '[id="android:id/content"] >2 FrameLayout[childCount=3||childCount=2||childCount=4] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13405131',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-插页广告',
      fastQuery: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          key: 0,
          matches: ['[id="com.nowcasting.activity:id/jad_feed_close"]'],
          snapshotUrls: 'https://i.gkd.li/import/13690826',
        },
        {
          key: 1,
          matches: ['[id="com.nowcasting.activity:id/ll_close"]'],
          snapshotUrls: 'https://i.gkd.li/import/13690822',
        },
        {
          preKeys: 1,
          key: 2,
          matches: ['[id="com.nowcasting.activity:id/ll_uninterested"]'],
          snapshotUrls: 'https://i.gkd.li/import/13690830',
        },
      ],
    },
  ],
});
