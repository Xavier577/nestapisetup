export default abstract class Instantiable<T> {
  constructor(props: T) {
    Object.assign(this, props);
  }
}
