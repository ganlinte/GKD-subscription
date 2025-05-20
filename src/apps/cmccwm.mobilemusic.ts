import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmccwm.mobilemusic',
  name: '咪咕音乐',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.ui.base.MainActivity',
      rules: [
        {
          matches:
            '@ImageView[id="cmccwm.mobilemusic.libraries_feature:id/iv_back"] - TextView[id="cmccwm.mobilemusic.libraries_feature:id/tv_title"][text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/13448898',
        },
      ],
    },
  ],
});
