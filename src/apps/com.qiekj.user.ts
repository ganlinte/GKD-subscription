import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qiekj.user',
  name: '胖乖生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qiekj.user.MainActivity',

      rules: [
        {
          key: 0,
          matches:
            '[id="com.qiekj.user:id/native_splash_view"] >n [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12903088',
        },
        {
          key: 1,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12903086',
        },
        {
          key: 2,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > TextView + TextView + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12903095',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      activityIds: 'com.qiekj.user.MainActivity',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.qiekj.user:id/btn_cancelUpdate"][text*="暂不更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13435011',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-我的-弹窗广告',
      enable: false,
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'TextView[text*="反馈"] -2 View > Image',
          snapshotUrls: 'https://i.gkd.li/import/14304573',
        },
        {
          key: 1,
          activityIds: 'com.qiekj.user.MainActivity',
          actionMaximum: 1,
          matches: [
            'ViewGroup[childCount>=5] >2 ViewGroup[clickable=true]',
            'TextView[text="关闭"]',
            'FrameLayout[childCount=4] > FrameLayout > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/14321282', //规则1
            'https://i.gkd.li/import/14459980', //规则1
            'https://i.gkd.li/import/14460112', //规则2
            'https://i.gkd.li/import/14467391', //规则3
          ],
        },
        {
          key: 2,
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          matches: 'TextView[text*="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/14383463',
        },
        {
          preKeys: 2,
          key: 3,
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          matches: 'TextView[id="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/14383477',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-我的-开通胖乖会员',
      enable: false,
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.qiekj.user.MainActivity',
      rules: 'TextView[text="暂不开通"]',
      snapshotUrls: 'https://i.gkd.li/import/14460136',
    },
  ],
});
