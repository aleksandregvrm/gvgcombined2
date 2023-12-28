import styled,{keyframes} from "styled-components";

export const Wrapper = styled.section`
  .introduction-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .introduction-img-btn{
    display: none;
  }
  .dots-container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .dot {
    border: 1px solid black;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-white);
    cursor: pointer;
  }
  .active {
    background: var(--primary-black);
  }
  p {
    padding: 1rem;
    margin-top: 1rem;
  }
  .introduction-text p {
    font-weight: 300;
  }
  .introduction-products {
    display: flex;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .products-link{
    width: 100%;
  }
  .products-btn {
    background: var(--primary-Company-red);
    cursor: pointer;
    font-size: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 0;
    font-weight: 300;
    width:100%;
    color: var(--primary-black);
  }
  /* black company images */
  .company-images {
    margin: 0.5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 2rem;
  }
  .company-images img {
    opacity: 0.6;
    height: 3rem;
    width: 6.4rem;
    border: 2px solid transparent;
    object-fit: contain;
    padding-left: 0.5rem;
  }
  .align-image {
    margin-right: 0.4rem;
  }
  /* end */
  @media screen and (min-width: 980px) {
    min-height: 105vh;
    .introduction-products {
      display: none;
    }
    .introduction-text {
      display: none;
    }
    .introduction-img {
      object-fit: cover;
    }
    .img-container {
      min-height: 550px;
      height: calc(100vh - 148px);
      position: relative;
      &:hover .introduction-img-btn{
        opacity: 0.75;
      }
    }
    .introduction-img-btn {
      padding: 1rem;
      width: 7rem;
      height: 3rem;
      position: absolute;
      top:50%;
      left: 50%;
      display: inline-block;
      transform: translate(-50%, -50%);
      background: var(--primary-Company-red);
      opacity: 0;
    }
    .company-images {
      display: none;
    }
  }
`;
const loadingAnimationImage = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`
export const AnimatedImage = styled.img`
  animation:${loadingAnimationImage} linear 1.2s;
`
