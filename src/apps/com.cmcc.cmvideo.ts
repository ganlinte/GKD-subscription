import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.cmcc.cmvideo:id/btn_cancle"]',
      snapshotUrls: 'https://i.gkd.li/import/12498307',
    },
    {
      key: 2,
      name: '局部广告-右下角小广告',
      fastQuery: true,

      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
      rules: '[id="com.cmcc.cmvideo:id/iv_right_bottom_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12498315',
    },
    {
      key: 3,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.cmcc.cmvideo:id/btn_update_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13276116',
    },
    {
      key: 4,
      name: '权限提示-推送通知权限弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.cmcc.cmvideo:id/base_dialog_left_btn"][text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13276127',
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',

      rules:
        '@[id="com.cmcc.cmvideo:id/iv_big_close"] + [id="com.cmcc.cmvideo:id/sdv_big_pic"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13276111',
        'https://i.gkd.li/import/13276122',
      ],
    },
  ],
});
