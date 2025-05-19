import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.leos.appstore',
  name: '联想应用中心',
  groups: [
    {
      key: 0,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules:
        '@[id="com.lenovo.leos.appstore:id/dialog_cancel"] + [text$="版本更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13401992',
    },
    {
      key: 1,
      name: '全屏广告-请求通知权限弹窗',
      activityIds:
        'com.lenovo.leos.appstore.activities.NotificationGuideActivity',
      fastQuery: true,
      rules: '[text$="打开应用中心通知"] +n [text="知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13401991',
    },
  ],
});
