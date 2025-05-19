import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mem.MacaoLife',
  name: '澳覓',
  groups: [
    {
      key: 1,
      name: '权限提示-開啟通知提示',
      fastQuery: true,
      activityIds: 'com.mem.life.ui.launch.LaunchActivity',
      rules: '[id="com.mem.MacaoLife:id/cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13350665',
    },
    {
      key: 2,
      name: '局部广告-浮窗廣告',
      fastQuery: true,
      activityIds: 'com.mem.life.ui.home.HomeActivity',
      rules: '[id="com.mem.MacaoLife:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350685',
    },
  ],
});
