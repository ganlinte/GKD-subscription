import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      enable: false,
      key: 1,
      name: '局部广告-消息列表上方广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@FrameLayout > [id="com.alibaba.android.rimet:id/icft_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13325125',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '全屏广告-文件即将过期提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@FrameLayout[id="com.alibaba.android.rimet:id/layout_close"] -2 TextView[text="文件即将过期请备份"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13325125',
        },
      ],
    },
    {
      name: '功能类-自动点击原图',
      enable: false,
      key: 3,
      actionMaximum: 1,
      fastQuery: true,
      activityIds:
        'com.alibaba.android.dingtalk.photoui.activitys.AlbumActivity',
      rules: [
        {
          key: 0,
          matches:
            'CheckBox[id="com.alibaba.android.rimet:id/cb_send_origin"][text="原图"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/import/13309648', //未选中 [checked=false]
            'https://i.gkd.li/import/13309845', //已选中 [checked=true]
          ],
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@Button[text*="暂不更新"] + Button[text*="更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13402478',
        },
        {
          matches:
            'TextView[id="com.alibaba.android.rimet:id/dialog_close_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13772151',
        },
      ],
    },
    {
      enable: false,
      key: 5,
      name: '功能类-扫码自动登录桌面版',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.alibaba.android.user.qrcode.WebLoginActivity',
      rules: [
        {
          matches: '[id="com.alibaba.android.rimet:id/btn_login"]',
          snapshotUrls: 'https://i.gkd.li/import/13433981',
        },
      ],
    },
  ],
});
