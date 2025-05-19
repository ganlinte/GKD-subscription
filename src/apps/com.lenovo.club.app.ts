import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.club.app',
  name: '联想',
  groups: [
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.lenovo.club.app.AdActivity',
      rules:
        '[id="com.lenovo.club.app:id/tv_title"][text="发现新版本"] < LinearLayout [text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13498778',
    },
  ],
});
