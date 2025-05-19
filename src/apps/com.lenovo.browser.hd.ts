import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.browser.hd',
  name: '联想浏览器HD',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules:
        '[text="发现新版本"] - * > [id="com.lenovo.browser.hd:id/fl_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13401982',
    },
    {
      key: 2,
      name: '全屏广告-请求通知权限弹窗',
      activityIds: 'com.zui.launcher.drawer.NormalLauncher',
      fastQuery: true,
      rules:
        '[text="开启消息通知"] +n * > [id="com.lenovo.browser.hd:id/tv_cancle"]',
      snapshotUrls: 'https://i.gkd.li/import/13401980',
    },
  ],
});
