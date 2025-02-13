import React from 'react';
import styled from 'styled-components';
import useViewport from '../../hooks/useViewPort';
import type { DropdownContentsType } from './DropDown';
import { isDropDownOn } from '../../store/dropDownStore';
import { useSetAtom } from 'jotai';
type Props = {
  data: DropdownContentsType;
  NumOfChildren: number;
  index: number;
};

function DropDownContents({ data, NumOfChildren, index }: Props) {
  const { width } = useViewport();
  const setIsDropDownOn = useSetAtom(isDropDownOn);
  const processOrder = (): number => {
    if (NumOfChildren === 1 && index === 1) {
      //처음인데 하나밖에 없을때
      return 2;
    }
    if (index === 1) {
      //처음인데 하나이상있을때
      return 0;
    } else if (NumOfChildren === index) {
      //끝에있을때
      return -1;
    }
    //중간에 있을때
    return 1;
  };
  return (
    <StDropdownMenu
      className={'dropdoen_menu'}
      $mediawidth={width}
      order={processOrder()}
      onClick={() => {
        data.func();
        setIsDropDownOn(false);
      }}
    >
      {data.img_src && <img src={data.img_src} alt="img" />} {data.content}
    </StDropdownMenu>
  );
}
const StDropdownMenu = styled.div<{ order: number; $mediawidth: number }>`
  display: flex;
  width: ${(props) => 156 * (props.$mediawidth / 1920)}px;
  height: ${(props) => 56 * (props.$mediawidth / 1920)}px;
  padding: ${(props) => {
    return `${13 * (props.$mediawidth / 1920)}px ${
      16 * (props.$mediawidth / 1920)
    }px `;
  }};
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.14);
  gap: 8px;
  & :hover {
    background: #dfdfdf;
  }
  background: var(--achromatic-colors-white, #fff);
  ${(props) => {
    if (props.order === 0) {
      return `border-radius: 14px 14px 0px 0px;`;
    } else if (props.order === 1) {
      return ``;
    } else if (props.order === 2) {
      return `border-radius: 14px 14px 14px 14px;`;
    } else {
      return `border-radius: 0px 0px 14px 14px;`;
    }
  }}
  z-index:9;
`;
export default DropDownContents;
