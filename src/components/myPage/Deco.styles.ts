import styled from 'styled-components';
export const Deco = {
  ButtonContainer: styled.div`
    display: flex;
  `,
  Point: styled.div`
    background-color: #f3e7ff;
    border: none;
    border-radius: 10px;
    padding: 8px 20px;
  `,
};
export const B = {
  NoneContainer: styled.div`
    display: grid;
    align-items: center;

    justify-content: center;
    margin-left: 200%;
    margin-top: 80%;
  `,
  GoIcon: styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;
    margin: 10px;
  `,
  BorderImg: styled.img`
    width: 150px;
    height: auto;
    object-fit: cover;

    margin: 20px;

    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  `,
  Number: styled.div`
    width: 100%;
    height: 80%;
    background-size: cover;
  `,
  NoneButton: styled.div`
    background-color: #8200ff;
    color: #fff;
    width: 226.5px;
    height: 48px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
  `,
  NoneMessage: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  `,
  Border: styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
  `,
  Equip: styled.button<{ is_equipped: boolean }>`
    position: RELATIVE;
    font-size: 14px;
    padding: 0px;8px;
    left: 100px;
    top: -30px;
    width: 80px;
    height: 30px;
    background-color: ${(props) => (props.is_equipped ? '#F3E7FF' : 'white')};
color:black;
    border-radius: 6px;
    border: ${(props) =>
      props.is_equipped ? '1px solid #c88fff' : '1px solid #d9d9d9'};
    cursor: pointer;
    &:hover {
      ${(props) =>
        !props.is_equipped &&
        `
        background-color: ${props.is_equipped ? '#F3E7FF' : 'white'};
        color: black;
      `}
  
      &:disabled:hover {
        cursor: not-allowed;
      }
  `,
  BorderContainer: styled.div`
    width: 268px;
    height: 300px;
    gap: 0px;
  `,
  ButtonContainer: styled.div`
    justify-content: space-between;
    width: 100px;
    align-items: center;
    margin-left: 25px;
  `,

  Container: styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px 1px;
  `,
  BorderName: styled.div`
    width: 100%;
    height: 20%;
    background-color: white;
    margin-top: 5px;
    line-height: 25px;
  `,
};
export const A = {
  NoneMessage: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  `,
  NoneContainer: styled.div`
    display: grid;
    align-items: center;

    justify-content: center;
    margin-left: 150%;
    margin-top: 75%;
  `,
  NoneButton: styled.div`
    background-color: #8200ff;
    color: #fff;
    width: 226.5px;
    height: 48px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
  `,
  GoIcon: styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;
    margin: 10px;
  `,
  Name: styled.div`
    background-color: #efefef;
    padding: 8px;
    border-radius: 999px;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
    display: flex;
    height: 48px;
    width: 260px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    margin: 10px;
  `,
  Equip: styled.button<{ is_equipped: boolean }>`
    width: 80px;
    height: 30px;
    margin-top: 5px;
    background-color: ${(props) => (props.is_equipped ? '#F3E7FF' : 'white')};
    color: black;
    border-radius: 6px;
    border: ${(props) =>
      props.is_equipped ? '1px solid #c88fff' : '1px solid #d9d9d9'};
    float: right;
    cursor: pointer;
    &:hover {
    ${(props) =>
      !props.is_equipped &&
      `
      background-color: ${props.is_equipped ? '#F3E7FF' : 'white'};
      color: black;
    `}

    &:disabled:hover {
      cursor: not-allowed;
    }
  `,
  Container: styled.div`
    position: absolute;
  `,
};
