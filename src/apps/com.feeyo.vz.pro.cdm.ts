import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.feeyo.vz.pro.cdm',
  name: '飞常准业内版',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches:
            '@View <3 FrameLayout[childCount=4] <2 FrameLayout[childCount=2] < FrameLayout < [vid="splashAdContainer"]',
          snapshotUrls: 'https://i.gkd.li/import/13926823',
        },
      ],
    },
  ],
});
