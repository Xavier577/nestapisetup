import { AERATION_TYPE } from '@internal/enums';
import { ModelType } from '@core/model/entities/model.entity';
import { ModelUnit } from '@core/model/entities/model.entity';

export type DynamicObject = Record<string, any>;

export type UserClaim = {
  id: string;
};

export type AerationType = AERATION_TYPE.MECHANICAL | AERATION_TYPE.DIFFUSED;

export type Model_Type =
  | ModelType.STAGE_FIVE
  | ModelType.STAGE_FOUR
  | ModelType.STAGE_THREE
  | ModelType.STAGE_TWO
  | ModelType.STAGE_ONE;

export type Model_Unit = ModelUnit.SI | ModelUnit.US;

export type Constructor<T = any> = new (...args: any[]) => T;
