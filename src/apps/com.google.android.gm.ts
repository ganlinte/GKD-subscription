import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.gm',
  name: 'Gmail',
  groups: [
    {
      enable: false,
      key: 2,
      name: '局部广告-信息流广告',
      rules: [
        {
          fastQuery: true,
          key: -1,
          name: '点击广告扩展-1',
          matches:
            '[id="com.google.android.gm:id/button_chip_ad_teaser_info_icon"]',
          snapshotUrls: 'https://i.gkd.li/import/13255698',
        },
        {
          fastQuery: true,
          key: 0,
          name: '点击广告扩展-2',
          matches: '[id="com.google.android.gm:id/basic_ad_teaser_info_icon"]',
          snapshotUrls: 'https://i.gkd.li/import/13255698',
        },
        {
          preKeys: [-1, 0],
          key: 1,
          name: '广告中心-点击屏蔽',
          matches: 'Button[text="屏蔽此广告"||text^="Block"]', // TODO fastQuery 优化改进 Button[text="屏蔽此广告"] <<n [id="com.google.android.gm:id/my_ad_center_dialog"]
          snapshotUrls: [
            'https://i.gkd.li/import/13255700',
            'https://i.gkd.li/import/13724271',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          name: '点击继续确认屏蔽',
          matches: 'Button[text="继续"||text="Continue"]', // TODO Button[text="继续"] <<n [id="com.google.android.gm:id/design_bottom_sheet"]
          snapshotUrls: [
            'https://i.gkd.li/import/13255701',
            'https://i.gkd.li/import/13724287',
          ],
        },
        {
          preKeys: 2,
          key: 3,
          fastQuery: true,
          name: '关闭弹窗',
          matches: '[id="com.google.android.gm:id/my_ad_center_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/import/13263279',
        },
      ],
    },
  ],
});
