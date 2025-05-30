import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xuexi.android',
  name: '学习强国',
  groups: [
    {
      enable: false,
      key: 10,
      name: '通知提示-请求开启通知权限提示信息',
      desc: '[x]',
      fastQuery: true,
      activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
      rules: [
        {
          matches:
            '@FrameLayout[id="cn.xuexi.android:id/layout_close"] -2 [text="开启消息通知，不错过重要新消息"]',
          snapshotUrls: 'https://i.gkd.li/import/12715160',
        },
      ],
    },
  ],
});
