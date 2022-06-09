import { UseCases } from "./useCases/useCases";

export const ReturnUseCases = () => {
  return (
    <>
      <UseCases
        direction="forward"
        imageName="security.svg"
        title="Security"
        content="You can manage your private keys and other authentication / sensitive keys that are likely to change. Mostly API keys, tokens and passwords."
      />
      <UseCases
        direction="backward"
        imageName="gaming.svg"
        title="Gaming"
        content="Manage all your asset resources dynamically such that you can push updates to your games on the go."
      />
      <UseCases
        direction="forward"
        imageName="code.svg"
        title="Code Injection"
        content="Inject codes that require continuous updates dynamically when your app is live. Think of it has depency injection on a global scale."
      />
      <UseCases
        direction="backward"
        imageName="resource.svg"
        title="Manage your live and dev resources"
        content="Make development faster and easier by having all your dev resources or environment variables in one place, and can be updated at any time without having to rebuild."
      />
      <UseCases
        direction="forward"
        imageName="you.svg"
        title="It is all left to you!"
        content="Get creative with your code and make updating your app in record time possible."
      />
    </>
  );
};
