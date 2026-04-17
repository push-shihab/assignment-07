import { FallingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-125">
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

export default Loading;
