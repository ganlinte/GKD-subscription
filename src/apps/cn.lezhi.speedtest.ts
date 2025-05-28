import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.lezhi.speedtest',
  name: '网速管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      ignoreGlobalGroupMatch: false,
      rules: [
        {
          anyMatches: [
            '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
            '@View <3 FrameLayout <2 FrameLayout < [id="cn.lezhi.speedtest:id/fl_splash_container"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13544242',
            'https://i.gkd.li/import/13885906',
            'https://i.gkd.li/import/13626049', //跳过
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      activityIds: '.main5.MainV5Activity',
      rules: [
        {
          matches: [
            'TextView[text="立即更新"]',
            '[id="cn.lezhi.speedtest:id/iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12727619',
        },
      ],
    },
  ],
});
