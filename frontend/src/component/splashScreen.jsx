import MomoLogo from "/src/assets/momoLogo.svg";
import styles from "./splashScreen.module.css";

function SplashScreen() {
  return (
    <div className={`absolute h-dvh w-screen flex items-center justify-center`}>
      <div className={styles.bounce}>
        <img src={MomoLogo} alt="momo logo" className={`h-36`} />
        <h1 className="text-center font-bold text-lg">Momo</h1>
      </div>
    </div>
  );
}

export default SplashScreen;
