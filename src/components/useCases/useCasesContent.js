export const UseCasesContent = (props) => {
  return (
    <>
      <div className="min-w-max">
        <img src={`../../images/${props.imageName}`} className="block" />
      </div>
      <div className="max-w-md">
        <p className="text-2xl font-bold my-6">{props.title}</p>

        <p>{props.content}</p>
      </div>
    </>
  );
};
