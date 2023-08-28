import styled from 'styled-components';

const S = {
  Layout: styled.div`
    width: 1360px;
    max-height: 4355px;
    margin-left: 30px;
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: right;
  `,
  Button: styled.button`
    background-color: #dddddd;
    color: black;
    border: none;
    width: 50px;
    height: 30px;
    border-radius: 10px;
    margin-top: 6px;
    margin-right: 5px;
    cursor: pointer;
  `,

  PostContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 1360px;
    max-height: 1954px;
    margin-top: 20px;
  `,

  Category: styled.div`
    font-size: 16px;
    width: 800px;
    margin-left: 17px;
    color: gray;
  `,

  Date: styled.div`
    font-size: 16px;
    width: 1360px;
    text-align: right;
    float: right;
    color: gray;
  `,

  Box: styled.div`
    width: 1360px;
    margin: 20px;
    padding: 0 auto;
  `,

  Title: styled.div`
    line-height: 1.5;
    max-width: 1360px;
    width: 800px;
    padding: 0 auto;
    font-size: 26px;
    font-weight: bold;
    margin: -5px;
  `,

  Content: styled.div`
    white-space: wrap;
    // word-wrap: break-word;
    font-size: 16px;
    line-height: 1.6;
    width: 1360px;
    max-height: 1000px;
    margin: 20px;
  `,

  Input: styled.input`
    width: 1360px;
    padding: 10px;
    outline: none;
    border-radius: 8px;
  `,

  Textarea: styled.textarea`
    width: 1360px;
    height: 450px;
    max-height: 4355px;

    line-height: 1.5;
    font-size: 14px;
    outline: none;
    border-radius: 8px;
  `,
  Img: styled.img`
    width: 60px;
    height: 60px;
  `,
  User: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    font-size: 15px;
  `,

  Nickname: styled.div`
    margin-left: 5px;
    white-space: nowrap;
  `,
};

export { S };
