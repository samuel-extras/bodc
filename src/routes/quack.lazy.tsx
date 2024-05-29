import Quack from "@/components/Quack";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/quack")({
  component: () => (
    <>
      <Quack />
    </>
  ),
});
