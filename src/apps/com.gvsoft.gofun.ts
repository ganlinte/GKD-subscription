import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gvsoft.gofun',
  name: 'GoFun出行',
  groups: [
    {
      key: 5,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.gvsoft.gofun.module.home.activity.HomeActivity',
      rules: [
        {
          action: 'clickCenter',
          matches:
            '[id="com.gvsoft.gofun:id/cardView"] + [id="com.gvsoft.gofun:id/iv_close"]',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/13497777',
    },
  ],
});
