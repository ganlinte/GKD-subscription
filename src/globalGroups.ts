import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const UPDATE_PROMPT_ORDER = -9; // 更新提示
export const YOUTH_MODE_ORDER = -8; // 青少年模式

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    order: OPEN_AD_ORDER,
    matchTime: 10000,
    actionMaximum: 2,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: 1,
        matches:
          '[childCount=0][visibleToUser=true][((text*="跳过" || text*="跳過" || text~="(?is).*skip.*") && text.length<10) || id~="(?is).*tt_splash_skip_btn" || vid~="(?is).*skip.*" || (vid~="(?is).*count.*" && vid~="(?is).*down.*" && vid!~="(?is).*load.*" && vid!~="(?is).*time.*" && vid!~="(?is).*hour.*" && vid!~="(?is).*minute.*" && vid!~="(?is).*second.*" && vid!~="(?is).*add.*" && vid!~="(?is).*ead.*") || ((desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*") && desc.length<10)]',
      },
      {
        key: 2,
        quickFind: true,
        matches:
          'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
]);
