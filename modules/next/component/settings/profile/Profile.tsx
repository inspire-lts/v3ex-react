import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import DividerLine from "@/component/utils/DividerLine";
import ProfileForm from "@/component/settings/profile/ProfileForm";
import Identicon from "react-identicons";
import { userSelector } from "@/store/userReducer";
import Divider from "@/component/utils/divider";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 100%;
`;

const Item = styled.div``;
const BoldText = styled.div`
  padding: 12px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;

const FormWrapper = styled.div`
  align-self: center;
  margin-top: 16px;
`;

const IdenticonWrapper = styled.div`
  align-self: center;
`;

export default function Profile({}) {
  const router = useRouter();
  const user = useSelector(userSelector);
  return (
    <Wrapper>
      <BoldText>个人信息</BoldText>
      <DividerLine />
      <Divider height={"16px"} />
      <IdenticonWrapper>
        <Identicon string={user?.username} size={"64"} />
      </IdenticonWrapper>
      <FormWrapper>
        <ProfileForm />
      </FormWrapper>
    </Wrapper>
  );
}
