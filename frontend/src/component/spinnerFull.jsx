import Spinner from "./spinner";

function SpinnerFull() {
  return (
    <div className="absolute w-screen h-screen flex items-center justify-center">
      <Spinner className="!text-[var(--color-tertiary)]" />
    </div>
  );
}

export default SpinnerFull;
