import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      rules: '[id="com.huawei.appmarket:id/skip_textview"]',
      snapshotUrls: 'https://i.gkd.li/import/16611800',
    },
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13228520',
    },
  ],
});
