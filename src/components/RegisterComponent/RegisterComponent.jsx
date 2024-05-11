import {
  PersonIcon,
  LockClosedIcon,
  EnvelopeClosedIcon,
  LockOpen1Icon
} from "@radix-ui/react-icons";
import {LoadingOutlined} from "@ant-design/icons"
import RegisterImage from "../../assets/design/stikazwallpaperReg.jpg";
import StikazLogo from "../../assets/design/Logo/png/logo-no-background.png";
import GoogleLogo from "../../assets/googleLogo.png"
import "./RegisterStyles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {Toaster, toast} from "sonner"


const RegisterComponent = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [confPass, setConfPass] = useState("");
  const [match, setMatch] = useState(true); // Initially assuming passwords match
  const [isLoading, setIsLoading] = useState(null);


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (email.trim() === "" || password.trim() === "" || username.trim() === "") {
      alert("Please fill in the required Fields");
      setIsLoading(false);
      return;
    }
    if (password !== confPass) {
      
      setMatch(false);
      setIsLoading(false);
      return;
    }
    else{
      toast.success("Yayyy");
      setIsLoading(false);
    }
    // Passwords match, you can proceed with your registration logic here
  }

  function handleFocus(event) {
    event.target.parentElement.style.borderColor = 'var(--primary)';
  }

  function handleBlur(event) {
    event.target.parentElement.style.borderColor = 'var(--secondary)';
  }

  return (
    <section className="RegisterComponent" direction="row">
      <Toaster  position="top-right"/>
      <img src={RegisterImage} alt="" className="RegisterWallpaper" />
      <div className="RegisterForm">
        <Link to="/">
          <img src={StikazLogo} alt="" />
        </Link>
       
        <form onSubmit={handleSubmit}>
        <h2 style={{alignSelf : "start"}}>Register</h2>
          <div className="input" onFocus={handleFocus} onBlur={handleBlur}>
            <PersonIcon />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter Your Name"
            />
          </div>
          <div className="input" onFocus={handleFocus} onBlur={handleBlur}>
            <EnvelopeClosedIcon />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Your Email"
            />
          </div>
          <div className="input" onFocus={handleFocus} onBlur={handleBlur} style={{ borderColor: !match && "red" }}>
            <LockOpen1Icon />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Your Password"
            />
          </div>

          <div className="input" style={{ borderColor: !match && "red" }} onFocus={handleFocus} onBlur={handleBlur}>
            {!match && <small className="Error">Passwords dont match</small>}
            <LockClosedIcon />
            <input
              type="password"
              onChange={(e) => {
                setConfPass(e.target.value);
                setMatch(true);
              }}
              required
              placeholder="Confirm Your Password"
            />
          </div>
          <button type="submit" className="btn">{isLoading ? <LoadingOutlined /> : "Register"}</button>
          <small style={{alignSelf : "center", color : "grey"}}>or</small>
          <button onClick={() => alert("you Clicked")} className="btn GoogleRegister">{isLoading ? <LoadingOutlined/> : <><img src={GoogleLogo} alt=""/>oogle</>}</button>
        </form>
        <small className="linkAccReg">Have an Account? <Link to="/login">Login</Link></small>
      </div>
    </section>
  );
};

export default RegisterComponent;
