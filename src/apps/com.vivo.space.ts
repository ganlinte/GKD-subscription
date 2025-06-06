import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.space',
  name: 'vivo 官网',
  groups: [
    {
      key: 3,
      name: '全屏广告-活动广告',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.vivo.space.ui.VivoSpaceTabActivity',
      rules: 'Image[text=""] + [text=""][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13218155',
        'https://i.gkd.li/import/13292907',
      ],
    },
    {
      key: 4,
      name: '全屏广告-消息通知弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'Button[id="com.vivo.space:id/vbutton_title"][text="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13771581',
        },
      ],
    },
  ],
});
