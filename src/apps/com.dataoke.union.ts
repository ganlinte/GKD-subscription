import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dataoke.union',
  name: '大淘客联盟',
  groups: [
    {
      key: 1,
      name: '权限提示-开启消息通知',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dtk.plat_home_lib.index.activity.IndexActivity',
      rules:
        '@[text="取消"] <<n [id="com.dataoke.union:id/parentPanel"] [text^="你还没有打开通知哦"]',
      snapshotUrls: 'https://i.gkd.li/import/13446826',
    },
  ],
});
