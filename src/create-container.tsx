import * as Store from "./store";

export function createContainer(component: React.StatelessComponent<any>): any {
    return (ownProps: any): React.ReactElement<any> => {
        const state = Store.getState();
        const mergedProps = { ...ownProps, state: state, dispatch: Store.dispatch };
        return component(mergedProps);
    }
}
