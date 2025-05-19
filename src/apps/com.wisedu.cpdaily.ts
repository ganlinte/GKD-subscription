import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wisedu.cpdaily',
  name: '今日校园',
  groups: [
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: 'com.wisorg.wisedu.home.ui.HomeActivity',
      rules:
        '[id="com.wisedu.cpdaily:id/btn_update"] + [id="com.wisedu.cpdaily:id/tv_ignore"]',
      snapshotUrls: 'https://i.gkd.li/import/13643565',
    },
  ],
});
