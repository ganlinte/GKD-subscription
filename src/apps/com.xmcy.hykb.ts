import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xmcy.hykb',
  name: '好游快爆',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,

      activityIds: 'com.xmcy.hykb.app.dialog.UpdateDialog',
      rules:
        '@[id="com.xmcy.hykb:id/iv_inner_button_close"] - RelativeLayout >n [id="com.xmcy.hykb:id/text_update_tip"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12870604',
        'https://i.gkd.li/import/13297450',
      ],
    },
    {
      key: 2,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      activityIds: 'com.xmcy.hykb.app.ui.main.MainActivity',
      rules: '[id="com.xmcy.hykb:id/dialog_home_notice_image_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13259427',
    },
  ],
});
