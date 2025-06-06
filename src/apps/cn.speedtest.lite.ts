import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.speedtest.lite',
  name: '网速管家极速版',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'cn.speedtest.lite.main.MainActivity',
      rules:
        '@[id="cn.speedtest.lite:id/iv_close"] - [id="cn.speedtest.lite:id/ll_main_pane"] >2 [id="cn.speedtest.lite:id/tv_upgrade_content"]',
      snapshotUrls: 'https://i.gkd.li/import/12715483',
    },
    {
      key: 10,
      name: '全屏广告-新人专享优惠弹窗',
      fastQuery: true,
      activityIds: 'cn.speedtest.lite.main.MainActivity',
      rules:
        '@[id="cn.speedtest.lite:id/iv_close"] - RelativeLayout >n [id="cn.speedtest.lite:id/ad_banner"]',
      snapshotUrls: 'https://i.gkd.li/import/12715511',
    },
  ],
});
