import { useEffect, useState } from "react";
import momoLogo from "../assets/momoLogo.svg";
import micIcon from "../assets/micIcon.svg";
import infoIcon from "../assets/infoIcon.svg";
import listeningImg from "../assets/listeningImg.svg";
import goBackIcon from "../assets/goBackIcon.svg";
import editIcon from "../assets/editIcon.svg";
import padlockIcon from "../assets/padlockIcon.svg";
import Input from "../component/input";
import Button from "../component/button2";
// import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function Onboarding() {
  const [step, setStep] = useState(3);
  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");

  const handleGoNext = () => setStep((step) => step < 3 && step + 1);
  const handleGoPrev = () => setStep((step) => step >= 1 && step - 1);

  return (
    <div className="p-6 lg:p-12 h-[100vh] max-w-5xl mx-auto">
      <div className="p-5 pb-16 border border-neutral-400 rounded-lg h-full">
        {step === 1 && (
          <SpeakLanguage
            language={language}
            setLanguage={setLanguage}
            onGoNext={handleGoNext}
          />
        )}
        {step === 2 && (
          <EnterName
            onGoNext={handleGoNext}
            onGoPrev={handleGoPrev}
            name={name}
            setName={setName}
          />
        )}
        {step === 3 && <SignUp onGoNext={handleGoNext} onGoPrev={() => {}} />}
      </div>
    </div>
  );
}

function SpeakLanguage({ onGoNext, language, setLanguage }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const initialError = "Couldn't detect language, try speaking again!";
  const [error, setError] = useState("");

  function handleSetLanguage(e) {
    setLanguage(e.target.value);
    setIsSpeaking(false);
  }
  function clearInput() {
    setLanguage("");
  }

  function handleGoNext() {
    onGoNext();
    setIsSpeaking(false);
  }

  console.log(language);

  return (
    <div className="text-center flex flex-col gap-8 h-full">
      {!isSpeaking && (
        <PageTitle title="Tap the mic and speak your preferred language" />
      )}
      {isSpeaking && <PageTitle title="Speak your preferred language" />}
      <img className="h-[180px] aspect-auto" src={momoLogo} />
      <div>
        {!isSpeaking && (
          <button
            onClick={() => setIsSpeaking(true)}
            className="bg-[var(--color-tertiary)] rounded-full p-7 cursor-pointer"
          >
            <img className="aspect-square h-8" src={micIcon} />
          </button>
        )}
        {isSpeaking && (
          <div className="mx-auto w-fit">
            <img
              // onClick={() => setIsSpeaking(false)}
              src={listeningImg}
              className="h-36"
              alt="listening icon"
            />
          </div>
        )}
      </div>
      <div className="mx-auto mt-auto flex flex-col lg:flex-row gap-5 items-center">
        <Input
          value={language}
          onChange={handleSetLanguage}
          placeholder="Search language"
          className="lg:min-w-[500px]"
          icon={infoIcon}
        />
        {language && !error && (
          <Button variant="text" onClick={handleGoNext}>
            Proceed
          </Button>
        )}
      </div>
      {error && (
        <div className="mx-auto">
          <ErrorMessage message={error} />
        </div>
      )}
    </div>
  );
}

function EnterName({ onGoNext, onGoPrev, name, setName }) {
  const initialError = "Username already taken";
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSetName(e) {
    setName(e.target.value);
  }
  useEffect(() => {
    function createUsername() {}

    if (name.length < 3) createUsername();
  }, [name]);
  return (
    <div className="text-center flex flex-col gap-8 h-full">
      <div className="relative">
        <button
          onClick={onGoPrev}
          className="absolute left-0 bottom-[50%] translate-y-[50%] cursor-pointer"
        >
          <img src={goBackIcon} alt="back icon" />
        </button>
        <PageTitle title="Name" />
        <Button
          disabled={isLoading || error}
          onClick={onGoNext}
          variant="text"
          className="absolute right-0  bottom-[50%] translate-y-[50%] font-medium"
        >
          Next
        </Button>
      </div>
      <img className="h-[180px] aspect-auto" src={momoLogo} />
      <div>
        <div className="mx-auto w-fit">
          <img src={listeningImg} className="h-36" alt="listening icon" />
        </div>
      </div>
      <div className="mx-auto mt-auto flex flex-col lg:flex-row gap-5 items-center">
        <Input
          value={name}
          onChange={handleSetName}
          placeholder="Your name"
          className="lg:min-w-[500px]"
          icon={editIcon}
        />
      </div>
      {error && <ErrorMessage message={error} />}
      {isLoading && !error && <p>Loading...</p>}
    </div>
  );
}
function SignUp({ onGoPrev }) {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange",
  // });
  // const password = watch("password");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userType, setUserType] = useState("");

  // const onSubmit = (data) => {
  //   console.log("Form submitted!", data);
  //   navigate("/");
  // };
  function onSubmit(e) {
    e.preventDefault();

    login(userType);

    navigate("/");
  }

  console.log(userType);

  return (
    <div className="h-full">
      <div className="relative">
        <Link
          // onClick={onGoPrev}
          to="/"
          className="absolute l-0 bottom-[50%] translate-y-[50%] cursor-pointer"
        >
          <img src={goBackIcon} alt="back icon" />
        </Link>
        <PageTitle title="Enter details" />
        {/* <Button
          variant="text"
          className="absolute right-0 font-medium bottom-[50%] translate-y-[50%]"
        >
          Skip
        </Button> */}
      </div>
      <div className="h-full max-w-xl mx-auto flex items-center">
        <form
          // onSubmit={handleSubmit(onSubmit)}
          onSubmit={onSubmit}
          className="flex flex-col gap-6 w-full"
        >
          <h2 className="text-2xl text-center">Kindly Login to your Account</h2>
          <div className="space-y-2">
            <select
              className="border border-neutral-400 w-full p-2 rounded-lg"
              name=""
              id=""
              onChange={(e) => setUserType(e.target.value)}
              value={userType}
              required
            >
              <option value="">Select Usertype</option>
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Email Address"
              className="lg:min-w-[500px]"
              icon={padlockIcon}
              iconPosition="left"
              // {...register("password", {
              //   required: "Password is required",
              //   minLength: {
              //     value: 6,
              //     message: "Password must be at least 6 characters",
              //   },
              // })}
            />
            {/* {errors.password && (
              <ErrorMessage message={errors.password.message} />
            )} */}
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Password"
              className="lg:min-w-[500px]"
              icon={padlockIcon}
              iconPosition="left"
              type="password"
              // {...register("confirmPassword", {
              //   required: "Please confirm your password",
              //   validate: (value) =>
              //     value === password || "Passwords do not match",
              // })}
            />
            {/* {errors.confirmPassword && (
              <ErrorMessage message={errors.confirmPassword.message} />
            )} */}
          </div>
          <Button>Sign Up</Button>
        </form>
      </div>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="w-fit rounded-sm p-1 bg-red-100 text-red-600 font-bold text-[.7rem]">
      {message}
    </p>
  );
}

function PageTitle({ title }) {
  return <h1 className="text-center text-xl">{title}</h1>;
}
export default Onboarding;
