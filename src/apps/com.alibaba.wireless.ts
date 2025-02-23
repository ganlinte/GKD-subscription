import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: [
        'com.alibaba.wireless.launch.home.V5HomeActivity',
        'com.alibaba.wireless.workbench.myali.MyAliSettingActivity',
      ],
      rules:
        '[id="com.alibaba.wireless:id/update_title"] +(2) LinearLayout >(2) [text="取消"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12684422',
        'https://i.gkd.li/import/12684426',
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页-弹窗广告',
      fastQuery: true,
      activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
      rules: 'WebView >n View > Image[text*="FXa-124-124"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13683509',
        'https://i.gkd.li/import/13683510',
      ],
    },
  ],
});
