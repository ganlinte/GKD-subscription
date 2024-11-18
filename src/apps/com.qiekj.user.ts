import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiekj.user',
  name: '胖乖生活',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: 'com.qiekj.user.MainActivity',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.qiekj.user:id/btn_cancelUpdate"][text*="暂不更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13435011',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗',
      desc: '点击【X】/【跳过】',
      fastQuery: true,
      activityIds: 'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
      rules: [
        {
          matches: [
            '@TextView[text="广告"]',
            '@TextView[id="close_btn"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/17789291',
            'https://i.gkd.li/i/17789294',
          ],
        },
      ],
    },
  ],
});
