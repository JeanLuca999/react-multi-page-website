import styled from "styled-components";
import { Link as anchor } from "react-router-dom";

import phone_icon from "../../assets/phone-icon.svg";
import location_icon from "../../assets/location-icon.svg";
import mail_icon from "../../assets/mail-icon.svg";

export const FooterWrapper = styled.footer`
  background-color: #0f172b;
  padding: 2rem 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1500px;
  margin: 0 auto;

  @media screen and (min-width: 800px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  margin: 0 10px;
  width: 100%;
  max-width: 300px;
`;

export const Ul = styled.ul`
  list-style-type: none;
`;

export const Link = styled(anchor)`
  display: block;
  font-size: 1.25rem;
  color: #fff;
  padding-left: 20px;
  margin: 7px 0;
  position: relative;
  font-family: "Nunito", sans-serif;
  text-decoration: none;

  transition: all 0.4s ease;
  &:hover {
    font-size: 1.3rem;

    @media screen and (min-width: 800px) {
      font-size: 1.1rem;
    }
  }
  &:nth-of-type(1) {
    margin-top: 1.25rem;
  }

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const CompanyLi = styled.li`
  ${Link} {
    &::before {
      content: ">";
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const ContactLi = styled.li`
  ${Link} {
    padding-left: 25px;
    &::before {
      content: "";
      width: 21px;
      height: 21px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &:nth-of-type(1) {
    ${Link} {
      &::before {
        background-image: url(${location_icon});
      }
    }
  }
  &:nth-of-type(2) {
    ${Link} {
      &::before {
        background-image: url(${phone_icon});
      }
    }
  }
  &:nth-of-type(3) {
    ${Link} {
      &::before {
        background-image: url(${mail_icon});
      }
    }
  }
`;

export const ContactIcons = styled.li`
  display: flex;
  gap: 10px;
  margin: 1rem 0;
`;

export const IconContainer = styled.figure`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  border: 1px solid #fff;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const OpeningLi = styled.li`
  display: block;
  margin: 1.1rem 0;
`;

export const OpeningTitle = styled.h5`
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-size: 1.3rem;
`;

export const OpeningText = styled.p`
  color: #fff;
  font-size: 1.25rem;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const NewsletterLi = styled(OpeningLi)``;

export const NewsletterText = styled(OpeningText)``;

export const InputContainer = styled.div`
  background-color: white;
  position: relative;
  margin: 1rem 0;
`;

export const Input = styled.input`
  display: block;
  font-size: 0.9rem;
  color: #666565;
  border: 0;
  height: 50px;
  width: 100%;
  padding-left: 10px;
`;

export const Submit = styled.button`
  padding: 8px 16px;
  background-color: #fea116;
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;
