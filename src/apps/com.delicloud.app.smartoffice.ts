import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.delicloud.app.smartoffice',
  name: '得力e+',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [vid="splash_container"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13840775',
            'https://i.gkd.li/import/13944086',
          ],
        },
      ],
    },
  ],
});
