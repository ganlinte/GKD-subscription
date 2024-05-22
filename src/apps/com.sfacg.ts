import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 1,
      name: '局部广告-新春小说折扣季/VIP新书上架',
      desc: '点击 X',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.sf.ui.main.MainActivity',
      rules: 'ImageView[id="com.sfacg:id/imgClose"]',
      snapshotUrls: 'https://i.gkd.li/import/14427490',
    },
    {
      key: 2,
      name: '权限提示-消息推送权限',
      desc: '点击 不再提醒',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.sf.ui.message.MessageActivity',
      rules: 'TextView[id="com.sfacg:id/tvCancel"]',
      snapshotUrls: 'https://i.gkd.li/import/15397688',
    },
  ],
});
