import loginImg from "@/assets/imgGirl.png";
import classes from './LoginPage.module.css'
import LoginForm from "@/components/UI/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.login__box}>
                <div className={classes.left__side}>
                    <div className={classes.img__containier}>
                        <img src={loginImg} alt="Не удалось загрузить картинку!"/>
                    </div>
                </div>

                <div className={classes.right__side}>
                    <div className={classes.login__form}>
                        <header className={classes.header__login__box}>
                            <h2>Рады тебя видеть!</h2>
                            <p>Мы скучали!</p>
                        </header>

                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;