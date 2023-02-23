import styled from "styled-components";

export const MainStyled = styled.main`
background-color: #fff;
width: 46rem;
height: 32rem;
box-shadow: 0rem 1.875rem 3.75rem rgba(61, 108, 236, 0.15);
border-radius: 2rem;
.container {
  background-color: #fff;
  display: grid;
  grid-template-columns: 50% 50%;
  height: auto;
  border-radius: 2rem;
  overflow: hidden;
  .result {
    grid-column: 1;
    background: linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%);
    border-radius: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2.375rem 3.375rem 2.875rem 3.375rem ; 
    .res {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.9375rem;
      color: #CAC9FF;
      padding-bottom: 40px
    }
    .number_result {
      width: 12.5rem;
      height: 12.5rem;
      background-color: blue;
      border-radius: 50%;
      display: grid;
      place-content: center;
      background: linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%);
      p {
        font-weight: 800;
        font-size: 4.5rem;
        line-height: 4.5rem;
        color: #fff; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        span {
          font-weight: 700;
          font-size: 1.125rem;
          line-height: 1.4375rem;
          color: #CAC9FF;
        }
      }
    }
    h2 {
      padding-top: 23px;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.625rem;
      color: #fff;
    }
    .description {
      padding-top: 12px;
      color: #CAC9FF;
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.4375rem;
    }
  }
  .summary {
    grid-column: 2;
    padding: 2.375rem 2.5rem 2.875rem 2.5rem;
    background: #FFFFFF;
    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.9375rem;
      color: #303B59;
    }
    ul {
      width: 100%;
      margin-top: 1.75rem;
      list-style: none;
      padding: 0rem !important;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        border-radius: 0.75rem;
        display: flex; 
        align-items: center;
        justify-content: space-between;
        padding: 1.0625rem 1rem 1.0625rem 1.25rem;
        .img_item {
          display: flex;
          gap: 0.625rem;
        }
        .number {
          p {
            display: flex;
            gap: 0.375rem;
            span {
              font-weight: 700;
              font-size: 1.125rem;
              line-height: 1.4375rem;
              color: #303B59;
            }
            .total {
              color: hsla(223, 30%, 27%, 1);
            }
          }
        }
      }
      .Reaction {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FF5555;
      }

      .Memory {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E;
      }

      .Verbal {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F;
      }

      .Visual {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6;
      }
    }
    a {
      margin-top: 2.5rem;
      display: grid;
      place-content: center;
      text-decoration: none;
      width: 18rem;
      height: 3.5rem;
      border-radius: 8rem;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.4375rem;
      background: #303B59;
      &:hover {
        background: linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%);
      }
    }
  }
}
// mobile
@media (max-width: 50rem) {
  box-shadow: unset;
  width: 100%;
  .container {
    display: flex !Important;
    flex-direction: column;
    border-radius: unset !Important;
    width: 100%;
  }
  .result {
    display: flex; 
    align-items: center;
    flex-direction: column;
    padding: 1rem 1.25rem !Important; 
    width: 100%;
    border-top-left-radius: 0rem !Important;
    border-top-right-radius: 0rem !Important;
    height: 22.25rem;
    .res {
      padding-bottom: 25px !Important;
      font-size: 1.125rem !Important;
      line-height: 1.4375rem !Important;
    }
    .description {
      font-size: 1rem !Important;
      line-height: 1.3125rem !Important;
    }
    .number_result {
      max-width: 8.75rem;
      height: 8.75rem !Important;
      p {
        font-size: 3.5rem;
        span {
          font-size: 1rem;
          line-height: 1.3125rem;
        }
      }
    }
    h2 {
      font-size: 1.5rem;
      line-height: 1.9375rem;
    }
    p {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.3125rem;
    }
  }
  .summary {
    width: 100%;
    padding: 1.875rem 1.25rem 1.25rem 1.25rem !Important;

    h3 {
      font-size: 1.125rem !Important;
      line-height: 1.4375rem !important;
    }

    a {
      width: 100% !Important;
      max-width: 18rem;
      margin: 0 auto;
    }
  }
}` 