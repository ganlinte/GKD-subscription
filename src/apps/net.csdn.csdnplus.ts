import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: ['https://i.gkd.li/import/12673680'],
        },
        {
          matches:
            '@View + TextView <(3,4,5) FrameLayout <(1,2) FrameLayout <<(1,2) [id="net.csdn.csdnplus:id/fl_third_ad"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13826577',
            'https://i.gkd.li/import/13224627',
            'https://i.gkd.li/i/17405187',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'net.csdn.csdnplus.activity.MainActivity',
        'net.csdn.csdnplus.activity.SetActivity',
      ],
      rules: [
        {
          matches:
            '[id="net.csdn.csdnplus:id/update"] -2 [id="net.csdn.csdnplus:id/cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12673693',
            'https://i.gkd.li/import/12673654',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-信息流广告',
      quickFind: true,
      activityIds: ['net.csdn.csdnplus.activity.MainActivity'],
      rules: [
        {
          key: 1,
          matches: '[text="广告"] + [id="net.csdn.csdnplus:id/iv_more"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12673738',
            'https://i.gkd.li/import/13224538',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          matches:
            '@[clickable=true] > [id="net.csdn.csdnplus:id/img_feedback_title"][text="重复推荐该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12673787',
            'https://i.gkd.li/import/13224551',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-关闭好评弹窗',
      resetMatch: 'app',
      actionMaximum: 1,
      quickFind: true,
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: '[id="net.csdn.csdnplus:id/tv_cancel"][text="残忍拒绝"]',
      snapshotUrls: 'https://i.gkd.li/import/13251085',
    },
    {
      enable: false,
      key: 10,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      name: '全屏广告-请求推送通知弹窗',
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: {
        matches: [
          '[text="开启推送通知"]',
          '[id="net.csdn.csdnplus:id/iv_close"]',
        ],
        snapshotUrls: ['https://i.gkd.li/import/12673638'],
      },
    },
    {
      key: 11,
      quickFind: true,
      name: '分段广告-底部广告',
      desc: '点击X-点击不感兴趣',
      rules: [
        {
          key: 0,
          activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
          matches:
            '@ImageView[clickable=true] <<2 ViewGroup <<2 ViewGroup - FrameLayout <<6 FrameLayout[id="net.csdn.csdnplus:id/fl_template_container"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13830821',
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
          matches: 'FrameLayout[id="android:id/content"] [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13830858',
        },
      ],
    },
  ],
});
