import { goTo } from "modular-plugins";
import { Button, Card, CodeBox } from "modular-ui-components";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import AppPage from "../../components/AppPage";

const HomePage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("home");

  return (
    <AppPage>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row">
        <Card
          header={t("cards_installation", { context: "header" })}
          body={
            <div>
              <p>{t("cards_installation", { context: "body" })}</p>
              <CodeBox
                enhanced
                dark
                value="npm i modular-engine"
                environment="terminal"
              />
            </div>
          }
        />
        <Card
          header="Selectors"
          body={t("cards_selectors", { context: "body" })}
          footer={
            <Button dark onClick={() => dispatch(goTo("selectors"))}>
              {t("cards_selectors", { context: "button" })}
            </Button>
          }
        />
        <Card
          header="Actions"
          body={t("cards_actions", { context: "body" })}
          footer={
            <Button dark onClick={() => dispatch(goTo("actions"))}>
              {t("cards_actions", { context: "button" })}
            </Button>
          }
        />
      </div>
    </AppPage>
  );
};

export default HomePage;
