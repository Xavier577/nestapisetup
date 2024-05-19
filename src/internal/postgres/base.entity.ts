import PartialInstantiable from '../../utils/partial-instantiable';

export class BaseEntity<T> extends PartialInstantiable<T> {
  id: string;
  created_at: Date;
  updated_at: Date;
}
