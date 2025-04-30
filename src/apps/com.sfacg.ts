import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[text^="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/19888120',
            'https://i.gkd.li/i/19888054',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-新春小说折扣季/VIP新书上架',
      desc: '点击 X',
      matchTime: 10000,
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.sf.ui.main.MainActivity',
      rules: 'ImageView[id="com.sfacg:id/imgClose"]',
      snapshotUrls: 'https://i.gkd.li/import/14427490',
    },
    {
      key: 2,
      name: '权限提示-消息推送权限',
      desc: '点击【不再提醒】',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.sf.ui.message.MessageActivity',
          matches: 'TextView[id="com.sfacg:id/tvCancel"]',
          snapshotUrls: 'https://i.gkd.li/import/15397688',
        },
        {
          activityIds: 'com.sf.ui.main.MainActivity',
          matches: '[id="com.sfacg:id/cancel_text"][text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/17519120',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-书库-右侧-上架预定书单',
      desc: '点击 X',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 20000,
      activityIds: 'com.sf.ui.main.MainActivity',
      rules: '@ImageView - ImageView[id="com.sfacg:id/iv_home_float"]',
      snapshotUrls: 'https://i.gkd.li/import/15397824',
    },
  ],
});
