export enum DURATION {
  MILLISECOND = 1,
  SECOND = 1_000 * MILLISECOND,
  MINUTE = 60 * SECOND,
  HOUR = 60 * MINUTE,
  DAY = 24 * HOUR,
}

export enum AppEnv {
  PRODUCTION = 'production',
  STAGING = 'staging',
  DEVELOPMENT = 'development',
  TEST = 'test',
}

export enum AERATION_TYPE {
  MECHANICAL = 'mechanical',
  DIFFUSED = 'diffused',
}
