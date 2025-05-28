import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.livelab',
  name: '纷玩岛',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      activityIds: 'cn.com.livelab.MainActivity',
      rules:
        '@Button - ImageView < View < View < View < View < FrameLayout < FrameLayout < FrameLayout[id="android:id/content"]',
      snapshotUrls: 'https://i.gkd.li/import/13258873',
    },
  ],
});
