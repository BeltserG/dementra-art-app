import classes from "@/components/widgets/shared/Header/styles/Header.module.scss";

const Logo = () => {
  console.log(classes)
  return (
    <div className={classes["logo-container"]}>
      <img src="" alt="logo"  className={classes.logo}/>
    </div>
  )
}

export default Logo