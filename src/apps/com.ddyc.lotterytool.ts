import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ddyc.lotterytool',
  name: '彩虹多多',
  groups: [
    {
      enable: false,
      key: 1,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ddyc.lotterytool.module.main.MainActivity',
      rules:
        'ImageView - ImageButton[id="com.ddyc.lotterytool:id/arg"][text=null]',
      snapshotUrls: 'https://i.gkd.li/import/13324555',
    },
    {
      enable: false,
      key: 2,
      name: '权限提示-请求推送通知弹窗',

      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="开启推送通知"] +2 LinearLayout [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13325888',
    },
  ],
});
