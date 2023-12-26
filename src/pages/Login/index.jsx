import styles from './Login.module.scss';

import { Link, useNavigate } from 'react-router-dom';
import {useState } from 'react';
import supabase from '../../config/supabaseClient';

export const Login = ({setToken}) => {
  const navigate = useNavigate()

  const [formData,setFormData] = useState({
    email:'',password:''
  })
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState('eyeOff');

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }
  const handleToggle = () => {
    if (type === 'password') {
      setIcon('eye');
      setType('text');
    } else {
      setIcon('eyeOff');
      setType('password');
    }
  };

  async function handleSignIn(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      setToken(data)
      navigate('/monitoring')

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className={styles.login}>
      <form className={styles.loginForm}
      onSubmit={handleSignIn}
      >
        <div className={styles.loginForm__logo}>
          <svg
            width="204"
            height="52"
            viewBox="0 0 204 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.3976 19.3498V16.2714L62.8911 16.7799V17.4492H69.6637V16.2714L59.3976 14.6518V9.98052H73.1572V13.233L69.6637 12.6976V11.8811H62.8911V13.1527L73.1572 14.7722V19.3498H59.3976Z"
              fill="#4256D0"
            />
            <path
              d="M74.2277 13.9959V12.2559H78.1762L81.7231 16.6729L84.6008 12.2559H88.1478L81.857 21.6252H77.7077V19.8852H79.4477L80.0501 19.0151L75.8339 13.9959H74.2277Z"
              fill="#4256D0"
            />
            <path
              d="M89.0821 19.3498V16.6729L92.4282 17.0074V17.6097H97.5814V17.0074L89.0821 15.8028V12.2559H100.927V14.9328L97.5814 14.5981V13.9959H92.4282V14.5313L100.927 15.7359V19.3498H89.0821Z"
              fill="#4256D0"
            />
            <path
              d="M102.137 13.996V12.2559H103.81V9.98052H107.157V12.2559H110.436V13.996H107.157V17.2082L107.96 17.6098H113.113V19.3498H107.09L103.81 17.7437V13.996H102.137Z"
              fill="#4256D0"
            />
            <path
              d="M112.829 13.9959V12.2559H126.348V15.8028L117.849 17.0074V17.6097H123.002V17.0074L126.348 16.6729V19.3498H114.503V13.9959H112.829ZM117.849 15.2808L123.002 14.5981V13.9959H117.849V15.2808Z"
              fill="#4256D0"
            />
            <path
              d="M128.752 19.3498V12.2559H131.148L131.831 12.9251L132.5 12.2559H135.913L137.386 12.9921L138.858 12.2559H142.739L146.018 13.8621V19.3498H142.673V14.3975L141.87 13.9959H139.728L139.059 14.3305V19.3498H135.712V14.3305L135.043 13.9959H132.098V19.3498H128.752Z"
              fill="#4256D0"
            />
            <path
              d="M58.1929 31.1958V29.2953H74.0941V32.7486L70.6006 32.2667V31.1958H63.6807V36.7639H70.6006V35.6931L74.0941 35.2113V38.6646H60.1873V31.1958H58.1929Z"
              fill="#4256D0"
            />
            <path
              d="M76.3636 38.6645V31.5706H88.4768V38.6645H76.3636ZM79.7098 36.9245H85.1306V33.3107H79.7098V36.9245Z"
              fill="#4256D0"
            />
            <path
              d="M89.6812 33.3107V31.5706H93.7501L94.4327 32.2398L95.102 31.5706H101.861V34.5152L98.515 34.1807V33.3107H94.7005V38.6645H91.3542V33.3107H89.6812Z"
              fill="#4256D0"
            />
            <path
              d="M102.269 33.3107V31.5706H106.351L107.02 32.2398L107.689 31.5706H115.921V37.8615L107.287 38.9322V40.9399H103.942V33.3107H102.269ZM107.287 37.2591L112.575 36.5899V33.3107H107.287V37.2591Z"
              fill="#4256D0"
            />
            <path
              d="M118.334 38.6645V31.5706H130.448V38.6645H118.334ZM121.681 36.9245H127.102V33.3107H121.681V36.9245Z"
              fill="#4256D0"
            />
            <path
              d="M131.652 33.3107V31.5706H135.721L136.404 32.2398L137.073 31.5706H143.832V34.5152L140.486 34.1807V33.3107H136.671V38.6645H133.326V33.3107H131.652Z"
              fill="#4256D0"
            />
            <path
              d="M145.444 38.6645V35.1175L154.077 34.0468V33.3107H148.79V33.913L145.444 34.2476V31.5706H157.423V38.6645H155.027L154.345 37.9953L153.675 38.6645H145.444ZM148.79 36.9245H154.077V35.6664L148.79 36.3222V36.9245Z"
              fill="#4256D0"
            />
            <path
              d="M158.631 33.3107V31.5707H160.304V29.2953H163.65V31.5707H166.929V33.3107H163.65V36.523L164.453 36.9245H169.606V38.6646H163.583L160.304 37.0584V33.3107H158.631Z"
              fill="#4256D0"
            />
            <path
              d="M169.323 33.3106V31.5705H174.342V38.6644H170.996V33.3106H169.323ZM170.996 30.6335V28.7597H174.342V30.6335H170.996Z"
              fill="#4256D0"
            />
            <path
              d="M176.749 38.6645V31.5706H188.863V38.6645H176.749ZM180.096 36.9245H185.516V33.3107H180.096V36.9245Z"
              fill="#4256D0"
            />
            <path
              d="M191.271 38.6645V31.5706H193.667L194.35 32.2398L195.019 31.5706H199.971L203.25 33.1768V38.6645H199.904V33.7121L199.101 33.3107H194.617V38.6645H191.271Z"
              fill="#4256D0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.9199 18.1718H25.1522L32.291 5.97073C35.4044 6.83432 38.1623 8.33739 40.5644 10.4799C42.9666 12.6225 44.7517 15.1864 45.9199 18.1718ZM29.5653 5.45154L19.1814 23.3637L12.1722 11.1627C14.076 9.34549 16.261 7.89608 18.7271 6.81442C21.1932 5.73276 23.8541 5.19194 26.7097 5.19194C27.1856 5.19194 27.6616 5.21357 28.1375 5.25684C28.6134 5.3001 29.0893 5.365 29.5653 5.45154ZM20.7389 31.1517H6.59093C6.37633 30.2846 6.21452 29.4296 6.10549 28.5869C5.99645 27.744 5.94194 26.8683 5.94194 25.9596C5.94194 23.5385 6.33133 21.2567 7.11012 19.1141C7.88891 16.9716 8.97057 15.0134 10.3551 13.2395L20.7389 31.1517ZM28.1375 33.7476L21.1284 45.9487C18.0149 45.085 15.2571 43.582 12.855 41.4394C10.4529 39.2969 8.66771 36.733 7.49952 33.7476H28.1375ZM34.6923 45.1049C32.2261 46.1866 29.5653 46.7275 26.7097 46.7275C26.1888 46.7275 25.7016 46.7058 25.2481 46.6625C24.7947 46.6193 24.3301 46.5544 23.8541 46.4678L34.238 28.5556L41.2471 40.7567C39.3434 42.5739 37.1585 44.0233 34.6923 45.1049ZM46.3092 32.8053C45.5304 34.9478 44.4488 36.906 43.0643 38.6799L32.6804 20.7677H46.8285C47.0431 21.6348 47.2048 22.4897 47.3139 23.3325C47.4229 24.1754 47.4775 25.0511 47.4775 25.9596C47.4775 28.3809 47.088 30.6627 46.3092 32.8053ZM16.6503 49.8738C19.8088 51.2375 23.1618 51.9194 26.7097 51.9194C30.299 51.9211 33.6625 51.2401 36.8002 49.8764C39.9379 48.5126 42.6853 46.6522 45.0424 44.295C47.3996 41.9362 49.26 39.1775 50.6237 36.0191C51.9875 32.8606 52.6694 29.5076 52.6694 25.9596C52.6677 22.3704 51.9857 19.0068 50.6237 15.8692C49.2618 12.7315 47.4013 9.98409 45.0424 7.62696C42.687 5.26982 39.9405 3.40937 36.8028 2.04563C33.6652 0.681875 30.3008 0 26.7097 0C23.1584 0.00173064 19.8044 0.683605 16.6477 2.04563C13.491 3.40764 10.7341 5.26809 8.37696 7.62696C6.01982 9.98236 4.15938 12.7289 2.79562 15.8666C1.43188 19.0042 0.750003 22.3686 0.750003 25.9596C0.748272 29.5076 1.42928 32.8606 2.79303 36.0191C4.15677 39.1775 6.01722 41.9353 8.37437 44.2924C10.7332 46.6496 13.4918 48.51 16.6503 49.8738ZM31.3072 24.3713L32.3978 25.3707C32.4422 25.4113 32.4776 25.4605 32.5019 25.5153C32.5261 25.5701 32.5385 25.6293 32.5385 25.6891V29.4029C32.5385 29.518 32.4921 29.6283 32.4097 29.7097C32.3272 29.791 32.2154 29.8367 32.0987 29.8367H30.2519C30.076 29.8367 29.9002 29.5764 29.9002 29.4029V28.9692H23.744V29.4897C23.744 29.6632 23.4801 29.8367 23.3043 29.8367H21.5454C21.4288 29.8367 21.3169 29.791 21.2344 29.7097C21.152 29.6283 21.1056 29.518 21.1056 29.4029V25.6891C21.1056 25.6293 21.1181 25.5701 21.1423 25.5153C21.1665 25.4605 21.2019 25.4113 21.2463 25.3707L22.3369 24.3713L23.3043 22.4627C23.3873 22.3294 23.5038 22.2195 23.6425 22.1436C23.781 22.0676 23.9372 22.0281 24.0958 22.0289H29.5483C29.7069 22.0281 29.8631 22.0676 30.0017 22.1436C30.1403 22.2195 30.2568 22.3294 30.3398 22.4627L31.3072 24.3713ZM29.4604 22.8965H24.1837L23.3043 24.6315H30.3398L29.4604 22.8965ZM24.1837 27.2341C24.3596 27.2341 24.6235 27.0606 24.6235 26.8871V26.2798C24.6235 26.1064 24.4476 25.846 24.2716 25.846L22.5128 25.4991C22.249 25.4124 22.0731 25.5858 21.9851 25.846V26.8004C21.9851 26.9739 22.161 27.2341 22.3369 27.2341H24.1837ZM31.3072 27.2341C31.4832 27.2341 31.659 26.9739 31.659 26.8004V25.846C31.5711 25.5858 31.3952 25.4124 31.1313 25.4991L29.3725 25.846C29.1966 25.846 29.0206 26.1064 29.0206 26.2798V26.8871C29.0206 27.0606 29.2845 27.2341 29.4604 27.2341H31.3072Z"
              fill="#4256D0"
            />
          </svg>
        </div>
        <h3 className={styles.loginForm__title}>
          Пожалуйста, введите ваш логин
        </h3>
        <input
          className={styles.loginForm__email}
          type="text"
          placeholder="Email"
          name='email'
          onChange={handleChange}
        />
        <div className={styles.loginForm__pw}>
          <input
            className={styles.loginForm__password}
            type={type}
            name="password"
            onChange={handleChange}
            placeholder="Пароль"
          />

          <div className={styles.loginForm__eye} onClick={handleToggle}>
            {icon === 'eyeOff' && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.79669 11.877L2.90357 18.7682C2.81537 18.8595 2.70986 18.9324 2.5932 18.9825C2.47654 19.0326 2.35107 19.059 2.22411 19.0601C2.09715 19.0612 1.97124 19.037 1.85373 18.9889C1.73622 18.9409 1.62946 18.8699 1.53968 18.7801C1.4499 18.6903 1.3789 18.5835 1.33082 18.466C1.28274 18.3485 1.25855 18.2226 1.25965 18.0956C1.26076 17.9687 1.28714 17.8432 1.33725 17.7266C1.38736 17.6099 1.4602 17.5044 1.55153 17.4162L8.55461 10.4131C8.5001 10.1095 8.51982 9.79723 8.61211 9.50291C8.70441 9.20859 8.86652 8.94096 9.08463 8.72285C9.30273 8.50475 9.57036 8.34263 9.86468 8.25034C10.159 8.15805 10.4713 8.13832 10.7749 8.19284L17.7808 1.18785C17.9612 1.01367 18.2027 0.917291 18.4534 0.91947C18.7041 0.921648 18.9439 1.02221 19.1212 1.19949C19.2985 1.37678 19.3991 1.6166 19.4012 1.86731C19.4034 2.11802 19.307 2.35955 19.1329 2.53989L12.2407 9.43397C12.3624 9.77491 12.3849 10.1434 12.3054 10.4966C12.226 10.8498 12.0479 11.1732 11.7919 11.4292C11.5359 11.6852 11.2125 11.8632 10.8593 11.9427C10.5061 12.0221 10.1376 11.9987 9.79669 11.877ZM17.0063 6.01848C18.8049 7.05498 20.0001 8.48734 20.0001 10.0746C20.0001 13.2434 15.2594 15.805 10.4383 15.8117C9.45722 15.8116 8.47883 15.7091 7.51907 15.5057L9.29852 13.7272C9.96479 13.9354 10.6753 13.9573 11.3531 13.7905C12.031 13.6238 12.6502 13.2747 13.1438 12.7811C13.6374 12.2875 13.9865 11.6682 14.1533 10.9904C14.3201 10.3126 14.2982 9.60206 14.09 8.93579L17.0063 6.01848ZM13.0286 4.58803L11.275 6.34167C10.6458 6.20043 9.99112 6.22056 9.37182 6.40018C8.75252 6.5798 8.18868 6.91307 7.73272 7.36903C7.27676 7.82499 6.94348 8.38883 6.76386 9.00814C6.58424 9.62744 6.56412 10.2821 6.70536 10.9113L3.61975 13.995C1.96078 12.9699 0.876465 11.5902 0.876465 10.0746C0.876465 6.90582 5.64208 4.32126 10.4383 4.33751C11.3122 4.34038 12.1852 4.42739 13.0286 4.58803Z"
                  fill="#4256D0"
                />
              </svg>
            )}
            {icon === 'eye' && (
              <svg
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4383 12.1564C5.61722 12.1631 0.876465 9.58809 0.876465 6.4193C0.876465 3.25051 5.64208 0.66595 10.4383 0.682205C15.2345 0.69846 20.0001 3.25051 20.0001 6.4193C20.0001 9.58809 15.2594 12.1497 10.4383 12.1564ZM10.4383 10.244C11.4527 10.244 12.4255 9.84107 13.1428 9.1238C13.8601 8.40652 14.263 7.43368 14.263 6.4193C14.263 5.40492 13.8601 4.43209 13.1428 3.71481C12.4255 2.99753 11.4527 2.59457 10.4383 2.59457C9.42391 2.59457 8.45108 2.99753 7.7338 3.71481C7.01652 4.43209 6.61356 5.40492 6.61356 6.4193C6.61356 7.43368 7.01652 8.40652 7.7338 9.1238C8.45108 9.84107 9.42391 10.244 10.4383 10.244ZM10.4383 8.33167C9.9311 8.33167 9.44468 8.13019 9.08605 7.77155C8.72741 7.41291 8.52593 6.92649 8.52593 6.4193C8.52593 5.91211 8.72741 5.42569 9.08605 5.06706C9.44468 4.70842 9.9311 4.50694 10.4383 4.50694C10.9455 4.50694 11.4319 4.70842 11.7905 5.06706C12.1492 5.42569 12.3507 5.91211 12.3507 6.4193C12.3507 6.92649 12.1492 7.41291 11.7905 7.77155C11.4319 8.13019 10.9455 8.33167 10.4383 8.33167Z"
                  fill="#4256D0"
                />
              </svg>
            )}
          </div>
        </div>
        <Link
          to="/password-reset"
          className={styles.loginForm__forgot_password}
        >
          Забыли пароль?
        </Link>
        <button type='submit' className={styles.loginForm__btn}>
          Авторизоваться
        </button>
        <Link to="/request" className={styles.loginForm__request}>
          Оставить заявку
        </Link>
      </form>
    </div>
  );
};
