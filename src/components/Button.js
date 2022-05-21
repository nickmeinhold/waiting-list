import classes from "./Button.module.css";

export const Button = (props) => {
  return (
    <button
      className={`${classes.btn} py-4  px-10 rounded-xl font-bold md:flex-grow-0 flex-grow`}
    >
      {props.title}
    </button>
  );
};
