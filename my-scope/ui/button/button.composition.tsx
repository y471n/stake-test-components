import React from "react";
import { Button } from "./button";

// export const BasicButton = () => <Button title="hello from Button" />;

interface IButtonProps {
  title: string;
}

export const PrimaryButton = ({ title = "Test Title" }: IButtonProps) => (
  <Button title={title} variant="primary" />
);

export const SecondaryButton = ({ title = "Test Title" }: IButtonProps) => (
  <Button title={title} variant="secondary" />
);
