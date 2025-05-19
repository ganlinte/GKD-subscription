import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zlfcapp.batterymanager',
  name: '电池容量检测管理',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: '@View[clickable=true] <<n [vid="splash_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13960341',
        },
      ],
    },
  ],
});
