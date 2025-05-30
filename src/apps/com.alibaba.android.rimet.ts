import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
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
      key: 2,
      name: '局部广告-文件即将过期提示',
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
      key: 3,
      name: '功能类-自动点击原图',
      fastQuery: true,
      actionMaximum: 1,
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
      key: 4,
      name: '全屏广告-钉钉新功能',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.alibaba.lightapp.runtime.activity.WebViewDialogActivity',
      rules: [
        {
          matches:
            'TextView[id="com.alibaba.android.rimet:id/dialog_close_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13772151',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-扫码自动登录桌面版',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
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
