import styled from "styled-components";

const Wrapper = styled.section`
    top: 0;
    width: 100%;
    min-height: 100vh;
    position: fixed;
    visibility: hidden;
    color: var(--primary-white);
    z-index: 100;
    .background {
      position: absolute;
      background: var(--primary-black);
      height: 100%;
      width: 100%;
      opacity: 0;
      visibility: hidden;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      padding: 2rem;
    }
    .close-button {
      cursor: pointer;
      position: absolute;
      right: 1.25rem;
      top: 1.25rem;
      font-size: 2rem;
      transition: var(--transition);
      color: var(--primary-Company-red);
      &:hover {
        scale: 1.1;
      }
    }
    p {
      text-align: left;
      line-height: 28px;
    }
    .active-background {
      visibility: visible;
      opacity: 0.9;
    }
    .image-container {
      padding-left: 1rem;
      width: 100%;
      min-height: 500px;
      max-width: 1200px;
    }
    .image-container img {
      max-width: 1200px;
      object-fit: contain;
    }
    .text-container {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
`;
export default Wrapper;
