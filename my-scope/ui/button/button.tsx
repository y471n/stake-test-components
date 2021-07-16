import React from "react";
import styles from "./button.module.css";

export type ButtonProps = {
  /**
   * a title to be rendered in the component.
   */
  title: string;
  variant: string;
};

export function Button({ title, variant }: ButtonProps) {
  return (
    <button className={styles.button} data-variation={variant}>
      {title}
    </button>
  );
}
