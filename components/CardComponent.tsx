import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const CardComponent = ({
  title,
  description,
  content,
  footer,
}: {
  title: string;
  description?: string;
  content?: string;
  footer?: string;
}) => {
  return (
    <Card className="w-full my-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default CardComponent;
