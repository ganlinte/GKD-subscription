import { RawApp } from '@gkd-kit/api';

interface RawDeprecatedKeysSetting {
  /**
   * 应用ID
   */
  id: string;

  /**
   * 应用名称
   */
  name: string;

  /**
   * 废弃的key值，不可使用
   */
  deprecatedKeys: number[];
}

export const checkDeprecatedGroupKeys = (apps: RawApp[]) => {
  apps.forEach((a) => {
    appDeprecatedKeys.forEach((d) => {
      if (a.id === d.id) {
        a.groups.forEach((g) => {
          if (d.deprecatedKeys.indexOf(g.key.valueOf()) !== -1) {
            console.error({
              configName: a.name,
              appId: a.id,
              groupName: g.name,
              groupKey: g.key,
            });
            throw new Error('invalid deprecated group key');
          }
        });
      }
    });
  });
};

const appDeprecatedKeys: RawDeprecatedKeysSetting[] = [];
