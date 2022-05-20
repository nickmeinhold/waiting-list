import { Button } from "./Button";
import { BoxPadding } from "./layout/BoxPadding";
import classes from "./Hero.module.css";

export const Hero = (props) => {
  return (
    <BoxPadding>
      <div className="md:flex sm:block my-40 ">
        <div className={` -my-40 max-w-2xl bg-green-50 ${classes.hero_image}`}>
          <img src="../../hero-image.svg" />
        </div>
        <div className="hero-texts min-w-2xl bg-green-50 mx-10">
          <h1 className="text-5xl font-bold ">
            Make changes to live apps without Redeployment.
          </h1>
          <div className="my-4"></div>
          <h5>
            {" "}
            It is a super power 🚀 . Join our wait-list as we build in public
          </h5>
          <div className="my-8"></div>
          <form className="flex ">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Email"
              className={`max-w-lg px-5 rounded-t-md  flex-grow border-b-2 focus:border-black ${classes.input_form}`}
            ></input>
            <div className="mx-4"></div>
            <Button title="Join the Wait" />
          </form>
          <div className="my-20"></div>
        </div>
      </div>
    </BoxPadding>
  );
};
