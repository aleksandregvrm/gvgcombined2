import styled from "styled-components";
const Wrapper = styled.footer`
  background: var(--primary-black);
  margin-top: 3.5rem;
  .footer-container {
    width: 100%;
    background: var(--primary-black);
    margin-top: 4rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 1rem;
    padding-bottom: 0;
    padding-top: 1rem;
    max-width: 1260px;
    margin: 0 auto;
    gap: 1rem;
  }
  h4{
    color: var(--primary-white);
    font-weight: 300;
  }
  .subscribe-btn {
    background: var(--primary-Company-red);
    padding: 1rem 2rem;
    border-radius: 0;
    &:hover {
      background: var(--primary-white);
    }
  }
  .subscribe-underline {
    width: 100%;
    background: var(--primary-white);
    height: 1px;
    opacity: 0.5;
    margin: 1rem 0;
  }
  .subscribe-input {
    height: 1.5rem;
    border: none;
    width: 80%;
    border-radius: 5px;
    font-size: 1rem;
    padding-left: 0.1rem;
    outline: none;
    font-family: var(font-family);
    background: none;
    color: var(--primary-white);
  }
  .logos-container{ 
    display: none;
  }
  .subscribe-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .letterbox {
    transition: var(--transition);
    color: var(--primary-white);
    opacity: 0.6;
    font-size: 1.5rem;
    &:hover {
      opacity: 1;
    }
  }
  .contacts-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 250px;
  }
  .contact-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.2rem;
    width: 100%;
    opacity: 0.9;
  }
  .animated-contact-text {
    position: relative;
    font-weight: 300;
    color: var(--primary-white);
    @media screen and (min-width:890px){
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--primary-Company-red);
        transition: var(--transition);
        visibility: hidden;
        transform-origin: bottom left;
      }
      &:hover::after {
        visibility: visible;
        width: 80%;
      }
    }
  }
  .animated-contact-text h4{
    font-weight: 300;
  }
  .under-text {
    text-decoration: underline;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
  .icon-link {
    font-size: 2rem;
    display: none;
  }
  .subscribe {
    margin-top: 1rem;
    width: 100%;
  }
  .subscribe-btn {
    width: 100%;
    padding: 1.15rem;
    color: var(--primary-black);
  }
  .pages-container {
    color: var(--primary-white);
    width: 100%;
    max-width: 350px;
  }
  .pages-container ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4rem;
    max-height: 180px;
  }
  .pages-container a {
    width: 100px;
    max-width: 180px;
    opacity: 0.9;
    transition: all 0.1s linear;
    &:hover {
      opacity: 1;
    }
    position: relative;
    @media screen and (min-width: 980px) {
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--primary-Company-red);
        visibility: hidden;
        transition: var(--transition);
        transform-origin: bottom left;
      }
      &:hover::after {
        visibility: visible;
        width: 70%;
      }
    }
  }
  .logo-icon {
    transition: var(--transition);
    &:hover {
      color: yellow;
    }
  }
  .authorization{
    display: none;
  }
  .footer-img {
    height: 60px;
    width: 120px;
  }
  .copy-text-logo {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    width: 100%;
    opacity: 0.9;
  }
  @media screen and (min-width: 880px) {
    padding: 0rem 5rem;
    padding-top: 1rem;
    margin-top: 1rem;
    .logos-container {
      opacity: 0.9;
      width: 70%;
      margin-top: 1rem;
      color: white;
      font-size: 1.5rem;
      display: flex;
      justify-content: flex-start;
      gap: 1.5rem;
    }
    .pages-container ul {
      max-height: 140px;
    }
  }
  @media screen and (min-width: 1180px) {
    .subscribe {
      margin-top: 0;
      flex-direction: column;
      width: 255px;
      align-items: flex-end;
    }
    .authorization{
      display: inline;
    }
  }
`;
export default Wrapper;
