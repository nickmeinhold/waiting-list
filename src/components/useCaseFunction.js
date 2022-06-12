import { UseCases } from "./useCases/useCases";

export const ReturnUseCases = () => {
  return (
    <>
      <UseCases
        direction="forward"
        imageName="security.svg"
        title="Manage Enviroment Variables"
        content={`Lyannah offers you a ${"staging and production"}. environment where you can manage environment variables for your projects at any point in the development cycle.`}
      />
      <UseCases
        direction="backward"
        imageName="gaming.svg"
        title="Make Live Changes"
        content="You can manage dynamic resources such as image links, text-write ups, booleans, background colors e.t.c, and update them dynamically even when your app is live.
        "
      />
      {/* <UseCases
        direction="forward"
        imageName="code.svg"
        title="Code Injection"
        content="Inject codes that require continuous updates dynamically when your app is live. Think of it has depency injection on a global scale."
      /> */}
      <UseCases
        direction="forward"
        imageName="resource.svg"
        title="Speed up development time"
        content="Make development faster and easier by having all your dev resources or environment variables in one place, and can be updated at any time without having to rebuild."
      />
      <UseCases
        direction="backward"
        imageName="you.svg"
        title="It is all left to you!"
        content="Get creative with your code and make updating your app in record time possible."
      />
    </>
  );
};
