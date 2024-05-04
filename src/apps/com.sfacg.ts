import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 1,
      name: '局部广告-新春小说折扣季',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.sf.ui.main.MainActivity',
      rules: 'ImageView[id="com.sfacg:id/imgClose"]',
      snapshotUrls: 'https://i.gkd.li/import/14427490',
    },
  ],
});
