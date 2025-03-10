import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.citiccard.mobilebankapp.WelcomeActivity'],
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.citiccard.mobilebank:id/btn_skip"]',
          snapshotUrls: ['https://i.gkd.li/import/12684908'],
        },
        {
          matches: '[id="com.citiccard.mobilebank:id/jump"]',
          snapshotUrls: ['https://i.gkd.li/import/13049013'],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      activityIds: [
        'com.citiccard.mobilebank.card.activity.BillDetailHomeActivity',
      ],
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.citiccard.mobilebank:id/iv_bill_home_cancel"]',
          snapshotUrls: ['https://i.gkd.li/import/13049284'],
        },
      ],
    },
    {
      key: 2,
      name: '权限提示',
      activityIds: [
        'com.citiccard.mobilebank.card.activity.BillDetailHomeActivity',
      ],
      fastQuery: true,
      rules: [
        {
          matches:
            '[id="com.citiccard.mobilebank:id/ll_app_upgrade_content"] + [id="com.citiccard.mobilebank:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/import/13049283'],
        },
      ],
    },
  ],
});
