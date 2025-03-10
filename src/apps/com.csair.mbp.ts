import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csair.mbp',
  name: '南方航空',
  groups: [
    {
      key: 3,
      name: '全屏广告-首页-弹窗广告',
      fastQuery: true,
      activityIds: 'com.csair.mbp.CSMBPActivity',
      rules: '[id="com.csair.mbp:id/close_btn"]',
      snapshotUrls: ['https://i.gkd.li/import/13197497'],
    },
  ],
});
