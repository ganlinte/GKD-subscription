import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.juduoduo.app',
  name: '剧多多',
  groups: [
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '快手广告SDK',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches:
            'ImageView[width<90][height<90] < @ViewGroup[clickable=true] <<n [id="com.juduoduo.app:id/ksad_tk_view"]',
          snapshotUrls: 'https://i.gkd.li/import/13705650',
        },
        {
          matches:
            '[id="com.juduoduo.app:id/ksad_tk_view"] @ViewGroup[clickable=true] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13705662',
        },
      ],
    },
  ],
});
