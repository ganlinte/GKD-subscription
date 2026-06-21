import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pandabus.android.jilinxing',
  name: '吉林行',
  groups: [
    {
      key: 1,
      name: '开屏小窗广告',
      desc: '检测到开屏穿山甲广告自动关闭',
      fastQuery: true,
      activityIds: ['com.pandabus.android.jilinxing.MainActivity'],
      rules: '@[vid="iv_native_dislike"]',
      snapshotUrls: [],
    },
  ],
});
