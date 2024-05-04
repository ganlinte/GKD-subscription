import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.baike',
  name: '百度百科',
  groups: [
    {
      key: 10,
      name: '权限提示-请求通知权限弹窗',
      desc: '自动点击【不允许】',
      activityIds: 'com.baidu.baike.component.push.NotificationEnableDialog',
      rules: '[text^="打开推送通知"] +2 [text="不允许"]',
      snapshotUrls: 'https://i.gkd.li/import/12755717',
    },
  ],
});
