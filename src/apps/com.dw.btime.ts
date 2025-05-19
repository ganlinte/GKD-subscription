import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dw.btime',
  name: '亲宝宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-应用内弹窗',
      fastQuery: true,
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules: '[id="com.dw.btime:id/iv_overlay_close"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12889448',
    },
    {
      key: 2,
      name: '局部广告-应用内横幅',
      fastQuery: true,
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules: '[id="com.dw.btime:id/old_baby_close"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12889450',
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      activityIds: 'com.dw.btime.base_library.dialog.DWBaseDialog',
      rules:
        'TextView[text="立即更新"] -3 [id="com.dw.btime:id/iv_upgrade_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12911011',
    },
  ],
});
