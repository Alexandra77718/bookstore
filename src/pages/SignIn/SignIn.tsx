import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import Title from "src/components/Title";
import Input from "src/components/Input";
import classNames from "classnames";
import Button from "src/components/Button";
import { ButtonType } from "src/utils/@globalTypes";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../Router";
import Tabs from "src/components/Tabs/Tabs";
enum TabsNames {
    Description,
    Authors,
    Reviews,
    SignIn,
    SignUp,
} 

enum TabsBlock {
    Description,
        SignIn,
}

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
      <div className={styles.container}>
          <Tabs title="Sign In" key={TabsNames.SignIn} tabsBlock={TabsBlock.SignIn} />
          <Tabs title="Description" key={TabsNames.Description} tabsBlock={TabsBlock.Description} />
          <Input
            value={email}
            onChange={onChangeEmail}
            type={"text"}
            title="Email"
            placeholder="Your email"
          />
          <div className={styles.button}>
            <Button
              title={"Sign In"}
              onClick={() => {}}
              type={ButtonType.Primary}
            />
          </div>
        </div>
  );
};

export default SingIn;
