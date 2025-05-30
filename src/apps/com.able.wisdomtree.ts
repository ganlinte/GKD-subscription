import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.able.wisdomtree',
  name: '知到',
  groups: [
    {
      enable: false,
      key: 2,
      name: '通知提示-消息推送通知',
      desc: '[暂不开启]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@TextView[id="com.able.wisdomtree:id/negativeButton"][text="暂不开启"] + View + [id="com.able.wisdomtree:id/positiveButton"][text="马上开启"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13458779',
            'https://i.gkd.li/import/13623441',
            'https://i.gkd.li/import/13695447',
          ],
        },
      ],
    },
  ],
});
