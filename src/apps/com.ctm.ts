import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ctm',
  name: 'CTM Buddy',
  groups: [
    {
      key: 1,
      name: '局部广告',
      fastQuery: true,
      activityIds: 'com.ctm.home.page.MainActivity',
      rules: '[id="com.ctm:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350575',
    },
    {
      key: 2,
      name: '局部广告-底部横幅广告',
      fastQuery: true,
      activityIds: 'com.ctm.home.page.MainActivity',
      rules: '[id="com.ctm:id/btn_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350612',
    },
  ],
});
