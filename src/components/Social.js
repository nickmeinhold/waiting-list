import classes from "./Social.module.css";

export const Social = (prop) => {
  return (
    <div
      className={`${classes.social} px-5 py-2 text-sm md:inline-flex flex items-center rounded-xl md:mr-5 md:mb-0 mb-5 delay-75 cursor-pointer`}
    >
      <img
        src={`../../${
          prop.social === "Join us on Discord" ? "discord.svg" : "twitter.svg"
        }`}
        alt={prop.social}
        className="social_icon"
      />
      <div className="mx-3"></div>
      <p>{prop.social}</p>
    </div>
  );
};
