import { FunctionComponent } from "react";

import styles from "./BaseTemplate.module.scss";

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: FunctionComponent<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.component}>{sampleTextProp}</div>;
};

export default BaseTemplate;
