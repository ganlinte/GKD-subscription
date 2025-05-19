import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.okii.watch.global',
  name: '小天才',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.okii.watch.global:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13630943',
    },
    {
      key: 2,
      name: '全屏广告-手表安全守护弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.okii.watch.global:id/photo_sensitive_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13630944',
    },
  ],
});
