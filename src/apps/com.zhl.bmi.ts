import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhl.bmi',
  name: '乐看视频',
  groups: [
    {
      key: 2,
      name: '全屏广告-广告弹窗',
      desc: '点击右上角x',
      activityIds: 'com.zhl.bmi.MainActivity',
      fastQuery: true,
      rules: [
        '@ImageView < FrameLayout[childCount=1] <(2,3) FrameLayout <(1,2) FrameLayout < FrameLayout < [id="android:id/content"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/13255787',
        'https://i.gkd.li/import/13255786',
        'https://i.gkd.li/import/13542343', //第二条规则
      ],
    },
  ],
});
