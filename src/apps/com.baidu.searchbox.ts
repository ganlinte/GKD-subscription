import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox',
  name: '百度',
  groups: [
    {
      key: 1,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches: '[text^="看视频"] -2 ImageView[index=4]',
          snapshotUrls: 'https://i.gkd.li/import/13806848',
        },
      ],
    },
  ],
});
