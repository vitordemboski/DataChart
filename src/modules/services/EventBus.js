import { AppState } from 'react-native';

class EventBus {
  observers = {};

  subscribe(type, callBack) {
    const { observers } = this;
    if (!observers[type]) {
      observers[type] = [callBack] || [];
      return;
    }
    if (observers[type].includes(callBack)) {
      // eslint-disable-next-line no-console
      console.warn(`The ${type} already has a callback equal to ${callBack}`);
      return;
    }
    this.observers[type].push(callBack);
  }

  unsubscribe(type, func) {
    const { observers } = this;
    if (observers[type]) {
      observers[type] = observers[type].filter(_func => _func !== func);
    }
  }

  notify(type, ...data) {
    const { observers } = this;
    try {
      if (observers[type]) observers[type].map(func => func(...data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
    }
  }

  getAll() {
    return this;
  }
}
const statement = new EventBus();
AppState.addEventListener('change', state => statement.notify('AppState', state));
export default statement;
