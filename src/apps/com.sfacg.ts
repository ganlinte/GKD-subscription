import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.sf.ui.launcher.LauncherActivity',
      rules: 'TextView[text*="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/14320791',
    },
  ],
});
