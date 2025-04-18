import Button from "./button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section>
      <Button isActive={active === "main"} onMyClick={() => onChange("main")}>
        Main
      </Button>
      <Button
        isActive={active === "feedback"}
        onMyClick={() => onChange("feedback")}
      >
        Feedback
      </Button>
    </section>
  );
}
