import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.net.shizheng.study',
  name: '365时政',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页广告弹窗',
      fastQuery: true,
      activityIds: 'cn.dingwei.cloud_classroom.MainActivity',
      rules:
        '@Button - ImageView < View < View < View < View < FrameLayout < FrameLayout < FrameLayout < FrameLayout[id="android:id/content"]',
      snapshotUrls: 'https://i.gkd.li/import/12708731',
    },
  ],
});
