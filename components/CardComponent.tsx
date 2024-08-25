import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const CardComponent = ({
  title,
  description,
  content,
  footer,
  link,
}: {
  title: string;
  description?: string;
  content?: string;
  footer?: string;
  link: string; 
}) => {
  return (
    <Card className="w-full my-2">
      <CardHeader>
        <Link href={link}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default CardComponent;
