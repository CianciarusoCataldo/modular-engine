import { ModularEngineAction } from "modular-engine-types";
import { Button } from "modular-ui-components";
import { useDispatch } from "react-redux";

export const ActionsButtons = ({
  actions,
}: {
  actions: { name: string; action: ModularEngineAction }[];
}) => {
  const ActionComponent = ({
    name,
    action,
  }: {
    name: string;
    action: ModularEngineAction;
  }) => {
    const dispatch = useDispatch();

    return (
      <Button key={name} className="m-2" onClick={() => dispatch(action)}>
        {name}
      </Button>
    );
  };

  return (
    <div className="flex flex-col items-center">
      {actions.map((actionUi, key) => (
        <div key={"button_" + key}>
          <ActionComponent {...actionUi} />
        </div>
      ))}
    </div>
  );
};
