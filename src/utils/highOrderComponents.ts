import Block from './Block';
import store, { StoreEvents } from './store';
import { isEqual } from './helpers';
import { TPropsDefault } from './Interfaces';

type Indexed<T = any> = {
    [key in string]: T;
};
type TProps = {} & TPropsDefault;
export function connect(mapStateToProps: (state: Indexed) => Indexed) {
    return function (Component: typeof Block<TProps>) {
        return class extends Component {
            constructor(...props: any) {
                let state = mapStateToProps(store.getState());
                super(...props);
                store.on(StoreEvents.Updated, () => {
                    const newState = mapStateToProps(store.getState());
                    if (!isEqual(state, newState)) {
                        this.setProps({ ...newState });
                    }
                    state = newState;
                });
            }
        };
    };
}
