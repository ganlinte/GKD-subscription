import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  groups: [
    {
      key: 10,
      name: '权限提示-开启消息通知',
      desc: '自动点击关闭',
      enable: false,
      fastQuery: true,
      activityIds: 'com.chaoxing.mobile.main.ui.MainTabActivity',
      rules: '[id="com.chaoxing.mobile:id/vNotificationItemClose"]',
      snapshotUrls: 'https://i.gkd.li/import/13197374',
    },
  ],
});
